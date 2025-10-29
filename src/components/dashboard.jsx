import 'react';
import { Wallet, LogOut, Shield, Stars, ChevronRight } from 'lucide-react';
// import albedo from '@albedo-link/intent';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const navigate = useNavigate();
  const publicKey = localStorage.getItem('token');

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
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
                <p className="wallet-key">{publicKey}</p>
              </div>
            </div>

            <div className="welcome-section">
              <Stars className="welcome-icon" />
              <h2 className="welcome-title">¡Bienvenido!</h2>
              <p className="welcome-text">Tu dashboard está listo para ser personalizado</p>
            </div>
          </div>
        </main>
      </div>
    );
}