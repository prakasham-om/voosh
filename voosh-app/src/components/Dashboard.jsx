import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, setSearchTerm, setSortOption } from '../slices/taskSlice';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, loading, error, searchTerm, sortOption } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => <TaskCard key={task._id} task={task} />);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Dashboard</h2>
        <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
      <TaskForm />
      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded w-1/2"
        />
        <select value={sortOption} onChange={handleSortChange} className="p-2 border rounded">
          <option value="recent">Recent</option>
          <option value="old">Old</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl mb-2">TODO</h3>
          {renderTasks('todo')}
        </div>
        <div>
          <h3 className="text-xl mb-2">In Progress</h3>
          {renderTasks('in-progress')}
        </div>
        <div>
          <h3 className="text-xl mb-2">Done</h3>
          {renderTasks('done')}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;