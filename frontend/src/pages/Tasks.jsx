import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!task.trim()) return;
    await api.post("/tasks", { title: task });
    setTask("");
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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-slate-700 mb-6">
        My Tasks
      </h2>

      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t._id}
            className="bg-white border border-slate-200 rounded-lg px-4 py-3 flex justify-between items-center shadow-sm"
          >
            <span className="text-slate-700">{t.title}</span>
            <button
              onClick={() => deleteTask(t._id)}
              className="text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
