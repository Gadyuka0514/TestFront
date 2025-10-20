import React from "react";
import TaskItem from "./TaskItem";
import { Task, TaskStatus } from "../App";

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  if (tasks.length === 0) return <p className="empty">No tasks found</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={() => onStatusChange(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
