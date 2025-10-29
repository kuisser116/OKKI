import React, { useState } from 'react';
import { Wallet, LogOut, Shield, Stars, ChevronRight } from 'lucide-react';
import albedo from '@albedo-link/intent'; // <-- 1. Esta es tu "constante"
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigator = useNavigate();
  console.log("token", localStorage.getItem('token'));
  
  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await albedo.publicKey({ network: 'testnet' });
      setIsAuthenticated(true);
      localStorage.setItem('token', res.pubkey);
        navigator('/dashboard');
      
    } catch (e) {
      setError('Error al conectar con Albedo. Por favor, intenta de nuevo.');
      console.error("Error al conectar con Albedo:", e);
    } finally {
      setIsLoading(false);
    }
  };


  // Página de Login
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
            <h1 className="login-title">Bienvenido</h1>
            <p className="login-subtitle">Autenticación segura con Albedo</p>
          </div>

          {/* Información de seguridad */}
          <div className="security-info">
            <div className="security-content">
              <Shield className="security-icon" />
              <div className="security-text">
                <h3 className="security-title">Verificación de Identidad</h3>
                <p className="security-description">
                  Utiliza tu wallet de Stellar para autenticarte de forma segura y descentralizada en la red Testnet.
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="error-message">
              <p>{error}</p>
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

        {/* Decoración inferior */}
        <div className="login-card-shadow"></div>
      </div>
    </div>
  );
}
