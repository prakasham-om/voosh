import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../slices/taskSlice';

function TaskForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', description: '', status: 'todo' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(formData));
    setFormData({ title: '', description: '', status: 'todo' });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Add Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="todo">TODO</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;