import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-filter">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All Tasks
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed Tasks
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active Tasks
      </button>
    </div>
  );
};

export default TaskFilter;
