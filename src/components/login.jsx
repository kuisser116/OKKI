import React, { useState } from 'react';
import { Wallet, Shield, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import albedo from '@albedo-link/intent';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await albedo.publicKey({ network: 'testnet' });
      if (res && res.pubkey) {
        localStorage.setItem('token', res.pubkey);
        navigate('/dashboard');
      } else {
        setError('No se obtuvo la clave pública desde Albedo. Intenta nuevamente.');
      }
    } catch (e) {
      setError('No se pudo conectar con Albedo. Verifica que la extensión esté instalada.');
      console.error('Error al conectar con Albedo:', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="background-effects">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="login-card-wrapper">
        <div className="login-card">
          <div className="login-icon-container">
            <div className="login-icon">
              <Shield className="icon" />
            </div>
          </div>

          <div className="login-header">
          </div>

          <div className="security-info">
            <div className="security-content">
              <Sparkles className="security-icon" />
              <div>
                <h3 className="security-title">Autenticación Descentralizada</h3>
                <p className="security-description">Conecta tu wallet de Stellar de forma segura. No almacenamos tus claves privadas.</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              <p>{error}</p>
            </div>
          )}

          <button onClick={connectWallet} disabled={isLoading} className={`connect-button ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Conectando...
              </>
            ) : (
              <>
                <Wallet />
                Conectar con Albedo
              </>
            )}
          </button>

          <div className="login-footer">
            <p className="footer-text">
              ¿No tienes Albedo?{' '}
              <a href="https://albedo.link/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Obtenerlo aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
