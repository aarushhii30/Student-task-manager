import styles from './FilterBar.module.css';

export default function FilterBar({ filters, onChange, taskCount }) {
  const statuses = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
  ];

  const priorities = [
    { value: 'all', label: 'All Priorities' },
    { value: 'high', label: '🔴 High' },
    { value: 'medium', label: '🟡 Medium' },
    { value: 'low', label: '🟢 Low' },
  ];

  const sorts = [
    { value: 'createdAt', label: 'Newest First' },
    { value: 'dueDate', label: 'Due Date' },
    { value: 'priority', label: 'Priority' },
  ];

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <div className={styles.tabs}>
          {statuses.map((s) => (
            <button
              key={s.value}
              className={`${styles.tab} ${filters.status === s.value ? styles.active : ''}`}
              onClick={() => onChange({ ...filters, status: s.value })}
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className={styles.count}>{taskCount} task{taskCount !== 1 ? 's' : ''}</span>
      </div>

      <div className={styles.right}>
        <select
          className={styles.select}
          value={filters.priority}
          onChange={(e) => onChange({ ...filters, priority: e.target.value })}
        >
          {priorities.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>

        <select
          className={styles.select}
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
        >
          {sorts.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
