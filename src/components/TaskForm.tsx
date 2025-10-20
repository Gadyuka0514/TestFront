import React, { useState, FormEvent } from "react";

interface TaskFormProps {
  onAdd: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    onAdd(title.trim(), desc.trim());
    setTitle("");
    setDesc("");
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
