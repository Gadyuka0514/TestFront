import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";

export type TaskStatus = "pending" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

const TASKS_STORAGE_KEY = "tasks";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | TaskStatus>("all");

  useEffect(() => {
    const saved = localStorage.getItem(TASKS_STORAGE_KEY);
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: "pending",
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const updateStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          let newStatus: TaskStatus;
          if (task.status === "pending") newStatus = "in_progress";
          else if (task.status === "in_progress") newStatus = "done";
          else newStatus = "pending";
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <Filter current={filter} onChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={updateStatus}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
