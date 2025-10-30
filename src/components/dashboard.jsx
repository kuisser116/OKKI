import React from 'react';
import { Wallet, LogOut, Shield, BookOpen, User, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const publicKey = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
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

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-card">
          {/* Wallet Info */}
          <div className="wallet-info">
            <div className="wallet-icon">
              <Wallet className="icon" />
            </div>
            <div className="wallet-details">
              <p className="wallet-label">Wallet Conectada</p>
              <p className="wallet-key">
                {publicKey?.substring(0, 8)}...{publicKey?.substring(publicKey.length - 8)}
              </p>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="welcome-section">
            <h2 className="welcome-title">¡Bienvenido a EduChain! 🎓</h2>
            <p className="welcome-text">
              Tu plataforma descentralizada de aprendizaje Web3
            </p>
          </div>

          {/* Navigation Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            {/* Card: Explorar Cursos */}
            <button
              onClick={() => navigate('/courses')}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                border: '2px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
              }}>
                <BookOpen size={28} style={{ color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '0.75rem',
                color: 'white'
              }}>
                Explorar Cursos
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>
                Descubre cursos de Web3, desarrollo, DeFi y más. Aprende mientras ganas tokens.
              </p>
            </button>

            {/* Card: Mi Perfil */}
            <button
              onClick={() => navigate('/profile')}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
              }}>
                <User size={28} style={{ color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '0.75rem',
                color: 'white'
              }}>
                Mi Perfil
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>
                Visualiza tu progreso, certificados NFT, logros y estadísticas de aprendizaje.
              </p>
            </button>

            {/* Card: Mis Tokens */}
            <button
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1))',
                border: '2px solid rgba(251, 191, 36, 0.3)',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)'
              }}>
                <Award size={28} style={{ color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '0.75rem',
                color: 'white'
              }}>
                Mis Tokens
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>
                Gestiona tus tokens LEARN y EDU. Visualiza tu balance y transacciones.
              </p>
            </button>
          </div>

          {/* Stats Banner */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <Sparkles size={24} style={{ color: '#6366f1', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.25rem' }}>
                500+
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Cursos Disponibles
              </div>
            </div>
            <div>
              <TrendingUp size={24} style={{ color: '#8b5cf6', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.25rem' }}>
                10K+
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Estudiantes Activos
              </div>
            </div>
            <div>
              <Zap size={24} style={{ color: '#6366f1', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.25rem' }}>
                2M+
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Tokens Distribuidos
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}