
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import Auth from "./components/Auth";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      const storedTasks = JSON.parse(localStorage.getItem(`tasks-${user.uid}`)) || [];
      setTasks(storedTasks);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`tasks-${user.uid}`, JSON.stringify(tasks));
    }
  }, [tasks, user]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });
console.log(user);
  return (
    <div className="app">
      <h1>Task Manager </h1>
      <h1>{user?.displayName?user?.displayName:" "}</h1>
      
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <TaskForm addTask={addTask} />
          <TaskFilter filter={filter} setFilter={setFilter} />
          <TaskList
            setTasks={setTasks}
            tasks={filteredTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
          <button  style={{marginTop:"10px",backgroundColor:"brown",color:"white"}}
            onClick={() => {
              auth.signOut();
              setUser(null);
              localStorage.removeItem("user");
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default App;
