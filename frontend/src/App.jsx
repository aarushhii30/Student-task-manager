import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-display)'
    }}>
      <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--border-light)' }}>404</div>
      <p style={{ fontSize: '1rem' }}>Page not found</p>
      <a href="/" style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>← Go home</a>
    </div>
  );
}
