import TaskCard from './TaskCard';
import styles from './TaskList.module.css';

export default function TaskList({ tasks, loading, error, onEdit, onDelete, onToggle }) {
  if (loading) {
    return (
      <div className={styles.stateContainer}>
        <div className={styles.spinner} />
        <p className={styles.stateText}>Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.stateContainer}>
        <div className={styles.errorIcon}>⚠</div>
        <p className={styles.stateText}>{error}</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>✦</div>
        <h3 className={styles.emptyTitle}>No tasks yet</h3>
        <p className={styles.emptyDesc}>Click "Add Task" to get started and stay on top of your work.</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
