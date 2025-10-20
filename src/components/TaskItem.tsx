import React from "react";
import { Task, TaskStatus } from "../App";

interface TaskItemProps {
  task: Task;
  onStatusChange: () => void;
  onDelete: () => void;
}

const statusLabels: Record<TaskStatus, string> = {
  pending: "Pending",
  in_progress: "In Progress",
  done: "Done",
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  return (
    <li
      className="task-item"
      style={{ animation: "fadeIn 0.3s ease forwards" }}
    >
      <div className="task-main">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-controls">
        <button onClick={onStatusChange} className={`status ${task.status}`}>
          {statusLabels[task.status]}
        </button>
        <button onClick={onDelete} className="delete">
          ×
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
