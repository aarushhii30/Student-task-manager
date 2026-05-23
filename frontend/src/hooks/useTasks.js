import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

export const useTasks = (filters = {}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (filters.status && filters.status !== 'all') params.status = filters.status;
      if (filters.priority && filters.priority !== 'all') params.priority = filters.priority;
      if (filters.sort) params.sort = filters.sort;

      const { data } = await api.get('/tasks', { params });
      setTasks(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  }, [filters.status, filters.priority, filters.sort]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const createTask = async (taskData) => {
    const { data } = await api.post('/tasks', taskData);
    setTasks((prev) => [data, ...prev]);
    return data;
  };

  const updateTask = async (id, updates) => {
    const { data } = await api.put(`/tasks/${id}`, updates);
    setTasks((prev) => prev.map((t) => (t._id === id ? data : t)));
    return data;
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const toggleComplete = async (id, completed) => {
    return updateTask(id, { completed: !completed });
  };

  // Client-side reorder (no backend call needed)
  const reorderTasks = (sourceIndex, destIndex) => {
    setTasks((prev) => {
      const updated = Array.from(prev);
      const [removed] = updated.splice(sourceIndex, 1);
      updated.splice(destIndex, 0, removed);
      return updated;
    });
  };

  return {
    tasks,
    loading,
    error,
    createTask,
    updateTask,
    deleteTask,
    toggleComplete,
    reorderTasks,
    refetch: fetchTasks,
  };
};