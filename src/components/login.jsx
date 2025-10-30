import React, { useState } from 'react';
import { Wallet, LogOut, Shield, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import albedo from '@albedo-link/intent';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await albedo.publicKey({ network: 'testnet' });
      localStorage.setItem('token', res.pubkey);
      navigate('/dashboard');
    } catch (e) {
      setError('No se pudo conectar con Albedo. Verifica que la extensión esté instalada.');
      console.error("Error al conectar con Albedo:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Efectos de fondo animados */}
      <div className="background-effects">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Card de Login */}
      <div className="login-card-wrapper">
        <div className="login-card">
          {/* Icono principal */}
          <div className="login-icon-container">
            <div className="login-icon">
              <Shield className="icon" />
            </div>
          </div>

          {/* Título */}
          <div className="login-header">
            <h1 className="login-title">EduChain</h1>
            <p className="login-subtitle">Aprende, Gana y Crece en Web3</p>
          </div>

          {/* Información de seguridad */}
          <div className="security-info">
            <div className="security-content">
              <Sparkles className="security-icon" />
              <div className="security-text">
                <h3 className="security-title">Autenticación Descentralizada</h3>
                <p className="security-description">
                  Conecta tu wallet de Stellar de forma segura. No almacenamos tus claves privadas.
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="error-message">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                <AlertCircle size={16} />
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* Botón de conexión */}
          <button
            onClick={connectWallet}
            disabled={isLoading}
            className={`connect-button ${isLoading ? 'loading' : ''}`}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Conectando...
              </>
            ) : (
              <>
                <Wallet className="icon-small" />
                Conectar con Albedo
                <ChevronRight className="icon-small chevron" />
              </>
            )}
          </button>

          {/* Footer */}
          <div className="login-footer">
            <p className="footer-text">
              ¿No tienes Albedo?{' '}
              <a 
                href="https://albedo.link/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Obtenerlo aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}