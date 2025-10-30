import React, { useState, useEffect } from 'react';
import { Wallet, LogOut, Shield, BookOpen, User, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../assets/styles/dashboard.css';

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

  useEffect(() => {
    if (!publicKey) return;

    setIsLoading(true);
    setBalances([]);
    setError(null);

    const fetchAccount = async () => {
      try {
        const StellarSdk = await import('stellar-sdk');
        const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
        const account = await server.accounts().accountId(publicKey).call();
        setBalances(account.balances || []);
      } catch (e) {
        console.error('Error fetching Stellar account:', e);
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
      return (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="ml-2">Cargando balance...</p>
        </div>
      );
    }

    if (error) return <p className="text-red-500 text-sm">{error}</p>;
    if (!balances || balances.length === 0) return <p className="text-gray-500">No se encontraron balances.</p>;

    return (
      <div className="balances-grid">
        {balances.map((balance, index) => (
          <div key={index} className="balance-card">
            <div className="balance-card-header">
              <div className="card-icon-wrapper card-icon-wrapper-blue">
                <Wallet size={28} className="card-icon" />
              </div>
              <h3 className="balance-card-asset">{balance.asset_type === 'native' ? 'XLM' : balance.asset_code}</h3>
            </div>
            <p className="balance-card-amount">{parseFloat(balance.balance).toFixed(4)}</p>
          </div>
        ))}
      </div>
    );
  };

  const shortKey = (key) => {
    if (!key) return 'No conectado';
    return `${key.substring(0, 6)}...${key.substring(key.length - 6)}`;
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="dashboard-logo">
            <div className="logo-icon">
              <Shield className="icon" />
            </div>
            <h1 className="logo-text">EduChain</h1>
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
              <p className="wallet-label">Wallet Conectada</p>
              <p className="wallet-key">{shortKey(publicKey)}</p>
            </div>
          </div>

          <div className="welcome-section">
            <h2 className="welcome-title">¡Bienvenido a EduChain! 🎓</h2>
            <p className="welcome-text">Tu plataforma descentralizada de aprendizaje Web3</p>
          </div>

          <div className="actions-grid">
            <button onClick={() => navigate('/courses')} className="action-card">
              <div className="card-icon-wrapper card-icon-wrapper-blue">
                <BookOpen size={28} className="card-icon" />
              </div>
              <h3 className="card-title">Explorar Cursos</h3>
              <p className="card-text">Descubre cursos de Web3, desarrollo, DeFi y más. Aprende mientras ganas tokens.</p>
            </button>

            <button onClick={() => navigate('/profile')} className="action-card action-card-green">
              <div className="card-icon-wrapper card-icon-wrapper-green">
                <User size={28} className="card-icon" />
              </div>
              <h3 className="card-title">Mi Perfil</h3>
              <p className="card-text">Visualiza tu progreso, certificados NFT, logros y estadísticas de aprendizaje.</p>
            </button>

            <button className="action-card action-card-yellow">
              <div className="card-icon-wrapper card-icon-wrapper-yellow">
                <Award size={28} className="card-icon" />
              </div>
              <h3 className="card-title">Mis Tokens</h3>
              <p className="card-text">Gestiona tus tokens LEARN y EDU. Visualiza tu balance y transacciones.</p>
            </button>
          </div>

          <div className="stats-grid">
            <div>
              <Sparkles size={24} className="stat-icon-blue" />
              <div className="stat-value">500+</div>
              <div className="stat-label">Cursos Disponibles</div>
            </div>

            <div>
              <TrendingUp size={24} className="stat-icon-purple" />
              <div className="stat-value">10K+</div>
              <div className="stat-label">Estudiantes Activos</div>
            </div>

            <div>
              <Zap size={24} className="stat-icon-blue" />
              <div className="stat-value">2M+</div>
              <div className="stat-label">Tokens Distribuidos</div>
            </div>
          </div>

          <div className="balances-section">
            <h2 className="welcome-title balances-title">Mis Balances</h2>
            {renderBalances()}
          </div>
        </div>
      </main>
    </div>
  );
}
