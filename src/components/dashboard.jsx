import {useState, useEffect} from 'react';
import { Wallet, LogOut, Shield, Stars, ChevronRight } from 'lucide-react';
// import albedo from '@albedo-link/intent';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {

  const navigate = useNavigate();
  const publicKey = localStorage.getItem('token');

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
  };

  const [balances, setBalances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- useEffect para buscar el balance ---
  useEffect(() => {
    // No hacer nada si no hay clave pública
    if (!publicKey) {
      return;
    }

    // Reiniciar estados
    setIsLoading(true);
    setBalances([]);
    setError(null);

    const fetchAccount = async () => {
      try {
        // --- ¡ESTA ES LA SOLUCIÓN!! ---
        // 1. Esperamos a que el módulo stellar-sdk se cargue
        //    Esto devuelve el mismo objeto que vimos en la consola.
        const StellarSdk = await import('stellar-sdk');

        console.log("StellarSdk loaded:", StellarSdk.Horizon);

        // 2. Ahora que hemos esperado (await), 
        //    StellarSdk.default SÍ existirá.
        const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');

        // 3. El resto de tu código funciona igual
        const account = await server.accounts().accountId(publicKey).call();
        
        // Guardar los balances en el estado
        setBalances(account.balances);

      } catch (e) {
        console.error('Error al buscar la cuenta:', e);
        // Manejar error común: cuenta no encontrada (necesita fondeo)
        if (e.response && e.response.status === 404) {
          setError('Esta cuenta aún no existe en la red (necesita ser fondeada con XLM).');
        } else {
          setError('Error al cargar el balance.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccount();

  }, [publicKey]);

    const renderBalances = () => {
    if (isLoading) {
      // Usando clases de Tailwind para un spinner simple (opcional)
      return (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="ml-2">Cargando balance...</p>
        </div>
      );
    }

    if (error) {
      return <p className="text-red-500 text-sm">{error}</p>;
    }

    if (balances.length === 0 && !isLoading) { // Asegúrate de no mostrar esto mientras carga
      return <p className="text-gray-500">No se encontraron balances.</p>;
    }

    // Mostrar la lista de balances (XLM, y otros tokens)
    return (
      <ul className="space-y-3">
        {balances.map((balance, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
            <span className="font-semibold text-lg text-gray-800">
              {/* Muestra 'XLM' para el balance nativo, o el código del token */}
              {balance.asset_type === 'native' ? 'XLM' : balance.asset_code}
            </span>
            <span className="font-mono text-lg text-gray-900">
              {/* Formatea el balance a 7 decimales */}
              {parseFloat(balance.balance).toFixed(7)}
            </span>
          </li>
        ))}
      </ul>
    );
  };

    return (
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div className="dashboard-header-content">
            <div className="dashboard-logo">
              <div className="logo-icon">
                <Shield className="icon" />
              </div>
              <h1 className="logo-text">Dashboard</h1>
            </div>
            
            <button onClick={handleLogout} className="logout-button">
              <LogOut className="icon-small" />
              Cerrar Sesión
            </button>
          </div>
        </header>

        <main className="dashboard-main">
          <div className="dashboard-card">
            <div className="wallet-info">
              <div className="wallet-icon">
                <Wallet className="icon" />
              </div>
              <div className="wallet-details">
                <p className="wallet-label">Conectado con</p>
                {/* Asegúrate de acortar la clave pública para que se vea bien */}
                <p className="wallet-key" title={publicKey}>
                  {publicKey ? `${publicKey.substring(0, 6)}...${publicKey.substring(publicKey.length - 6)}` : 'No conectado'}
                </p>
              </div>
            </div>

            <div className="welcome-section">
              <Stars className="welcome-icon" />
              <h2 className="welcome-title">¡Bienvenido!</h2>
              <p className="welcome-text">Tu dashboard está listo para ser personalizado</p>
            </div>

            {/* --- ¡¡AQUÍ ESTÁ LA NUEVA SECCIÓN!! --- */}
            <div className="balances-section">
              <h3 className="balances-title">Tus Balances</h3>
              
              {/* Aquí es donde llamamos a la función renderBalances */}
              {renderBalances()}

            </div>
            {/* --- FIN DE LA NUEVA SECCIÓN --- */}

          </div>
        </main>
      </div>
    );
}

