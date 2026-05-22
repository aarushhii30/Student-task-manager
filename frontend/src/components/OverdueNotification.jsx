import { useState } from 'react';
import styles from './OverdueNotification.module.css';

export default function OverdueNotification({ tasks }) {
  const [dismissed, setDismissed] = useState(false);

  const overdue = tasks.filter((t) => {
    if (t.completed || !t.dueDate) return false;
    return new Date(t.dueDate) < new Date();
  });

  if (overdue.length === 0 || dismissed) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <span className={styles.bellIcon}>🔔</span>
        <div>
          <p className={styles.title}>
            You have {overdue.length} overdue task{overdue.length > 1 ? 's' : ''}!
          </p>
          <p className={styles.list}>
            {overdue.slice(0, 3).map((t) => t.title).join(', ')}
            {overdue.length > 3 && ` +${overdue.length - 3} more`}
          </p>
        </div>
      </div>
      <button className={styles.dismiss} onClick={() => setDismissed(true)} title="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}