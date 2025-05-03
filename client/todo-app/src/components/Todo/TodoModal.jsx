import React, { useState } from "react";
import { CalendarDateRangeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { TimePicker } from "antd";
import { DatePicker } from "antd";
const TaskModal = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Create Task</h2>
          <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                clipRule="evenodd"
              />
            </svg>
            Repeat
          </button>
        </div>

        {/* Inputs */}
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task description"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tools */}
        <div className="flex items-center gap-3 mb-4">
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <PlusIcon className="w-5 h-5" />
          </button>

          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <CalendarDateRangeIcon className="w-5 h-5" />
          </button>

          <div className="flex gap-2 items-center">
            <TimePicker placeholder="Start Time" className="w-28" />
            <TimePicker placeholder="End Time" className="w-28" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
