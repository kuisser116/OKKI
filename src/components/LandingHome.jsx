import React from 'react';
import { BookOpen, Trophy, Users, Coins, Shield, ChevronRight, Zap } from 'lucide-react';
import '../assets/styles/LandingHome.css';

export default function LandingHome() {
  const features = [
    {
      icon: <Coins size={32} />,
      title: 'Learn-to-Earn',
      desc: 'Gana tokens $LEARN mientras completas cursos y quizzes'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Certificados NFT',
      desc: 'Obtén certificados verificables en blockchain al completar cursos'
    },
    {
      icon: <Users size={32} />,
      title: 'Work-to-Earn',
      desc: 'Traduce cursos, da soporte y crea contenido para ganar $EDU'
    },
    {
      icon: <Zap size={32} />,
      title: 'Doble Token',
      desc: 'Sistema sostenible con $LEARN para jugar y $EDU para valor real'
    }
  ];

  const stats = [
    { value: '500+', label: 'Cursos Disponibles' },
    { value: '10K+', label: 'Estudiantes Activos' },
    { value: '2M+', label: 'Tokens Distribuidos' },
    { value: '98%', label: 'Satisfacción' }
  ];

  return (
    <div className="landing-container">
      <div className="landing-bg-effects">
        <div className="landing-bg-circle landing-bg-circle-1" />
        <div className="landing-bg-circle landing-bg-circle-2" />
      </div>

      <header className="landing-header">
        <div className="landing-logo">
          <Shield style={{ width: '32px', height: '32px' }} />
          <span className="landing-logo-text">EduChain</span>
        </div>
        <button className="landing-header-button">
          Conectar Wallet
        </button>
      </header>

      <main className="landing-main">
        <div className="hero-section">
          <h1 className="hero-title">
            Aprende, Gana y Crece en Web3
          </h1>
          <p className="hero-subtitle">
            El primer marketplace descentralizado donde tu educación genera valor real.
            Learn-to-Earn, Work-to-Earn y más.
          </p>
          <div className="hero-buttons">
            <button className="hero-button-primary">
              Explorar Cursos <ChevronRight size={20} />
            </button>
            <button className="hero-button-secondary">
              Cómo Funciona
            </button>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-desc">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="stats-section">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="stat-value">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
