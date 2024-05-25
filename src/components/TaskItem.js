

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    editTask({ ...task, title, description, dueDate, priority });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div className="task-header">
            <h3>{task.title}</h3>
            {task.completed && (
              <span className="completed-status">
                <FontAwesomeIcon icon={faCheckCircle} /> Completed
              </span>
            )}
          </div>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <div className="actions">
            <button className="toggle" onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Mark as Active" : "Mark as Completed"}
            </button>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
