import { useEffect, useState } from "react";
import api from "../api/axios";
import { logout } from "../utils/auth";

export default function Tasks() {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setList(res.data);
  };

  const addTask = async () => {
    await api.post("/tasks", { title: tasks });
    setTasks("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      <input value={tasks} onChange={e => setTasks(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map(task => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>X</button>
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
