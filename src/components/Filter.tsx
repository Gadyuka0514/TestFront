import React from "react";
import { TaskStatus } from "../App";

interface FilterProps {
  current: "all" | TaskStatus;
  onChange: (value: "all" | TaskStatus) => void;
}

const Filter: React.FC<FilterProps> = ({ current, onChange }) => {
  return (
    <div className="filter">
      <button
        className={current === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        All
      </button>
      <button
        className={current === "pending" ? "active" : ""}
        onClick={() => onChange("pending")}
      >
        Pending
      </button>
      <button
        className={current === "in_progress" ? "active" : ""}
        onClick={() => onChange("in_progress")}
      >
        In Progress
      </button>
      <button
        className={current === "done" ? "active" : ""}
        onClick={() => onChange("done")}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
