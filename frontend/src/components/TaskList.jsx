import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import styles from './TaskList.module.css';

export default function TaskList({ tasks, loading, error, onEdit, onDelete, onToggle, onReorder }) {
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    onReorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <div
            className={`${styles.list} ${snapshot.isDraggingOver ? styles.draggingOver : ''}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={snapshot.isDragging ? styles.dragging : ''}
                  >
                    <TaskCard
                      task={task}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onToggle={onToggle}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}