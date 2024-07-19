import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../slices/taskSlice';

function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="text-xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={handleDelete}>
          Delete
        </button>
        <button className="bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
      </div>
    </div>
  );
}

export default TaskCard;