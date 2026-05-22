import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './Header.module.css';

export default function Header({ onAddTask }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
          </div>
          <div>
            <h1 className={styles.title}>TaskFlow</h1>
            <p className={styles.subtitle}>Student Task Manager</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.addBtn} onClick={onAddTask}>
            <span className={styles.plus}>+</span>
            <span>Add Task</span>
          </button>

          {user ? (
            <div className={styles.userMenu}>
              <button
                className={styles.avatar}
                onClick={() => setMenuOpen(!menuOpen)}
                title={user.name}
              >
                {user.name?.charAt(0).toUpperCase()}
              </button>
              {menuOpen && (
                <div className={styles.dropdown}>
                  <p className={styles.userName}>{user.name}</p>
                  <p className={styles.userEmail}>{user.email}</p>
                  <hr className={styles.divider} />
                  <button
                    className={styles.logoutBtn}
                    onClick={() => { logout(); setMenuOpen(false); }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
