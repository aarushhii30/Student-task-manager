import { useState, useMemo } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import SearchBar from '../components/SearchBar';
import OverdueNotification from '../components/OverdueNotification';
import { useTasks } from '../hooks/useTasks';
import styles from './HomePage.module.css';

const DEFAULT_FILTERS = {
  status: 'all',
  priority: 'all',
  sort: 'createdAt',
};

export default function HomePage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState('');

  const { tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete, reorderTasks } = useTasks(filters);

  // Client-side search filter
  const filteredTasks = useMemo(() => {
    if (!search.trim()) return tasks;
    const q = search.toLowerCase();
    return tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }, [tasks, search]);

  const handleAddTask = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await deleteTask(id);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const handleSubmit = async (formData) => {
    if (editingTask) {
      await updateTask(editingTask._id, formData);
    } else {
      await createTask(formData);
    }
  };

  const handleReorder = (sourceIndex, destIndex) => {
    reorderTasks(sourceIndex, destIndex);
  };

  // Stats
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const high = tasks.filter((t) => t.priority === 'high' && !t.completed).length;

  return (
    <div className={styles.page}>
      <Header onAddTask={handleAddTask} />

      <main className={styles.main}>
        {/* Overdue Notification Banner */}
        <OverdueNotification tasks={tasks} />

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{total}</span>
            <span className={styles.statLabel}>Total</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.pendingNum}`}>{pending}</span>
            <span className={styles.statLabel}>Pending</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.doneNum}`}>{completed}</span>
            <span className={styles.statLabel}>Done</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.highNum}`}>{high}</span>
            <span className={styles.statLabel}>High Priority</span>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar value={search} onChange={setSearch} />

        <FilterBar
          filters={filters}
          onChange={setFilters}
          taskCount={filteredTasks.length}
        />

        <TaskList
          tasks={filteredTasks}
          loading={loading}
          error={error}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={toggleComplete}
          onReorder={handleReorder}
        />
      </main>

      <TaskModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingTask(null); }}
        onSubmit={handleSubmit}
        task={editingTask}
      />
    </div>
  );
}