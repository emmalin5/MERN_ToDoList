import React, { useState } from "react";

const generateTimes = () => {
  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hour = String(h).padStart(2, '0');
      const min = String(m).padStart(2, '0');
      times.push(`${hour}:${min}`);
    }
  }
  return times;
};

const TimeDropdown = ({ label, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const times = generateTimes();

  return (
    <div className="relative w-24">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 150)}
        className="w-full px-2 py-1  border border-gray-600 rounded-md text-gray-500 bg-white-900 focus:outline-none focus:ring-2 focus:ring-blue-500 scrollbar-thin"
      />
      {showOptions && (
        <div className="absolute mt-3 top-full left-0 w-full max-h-60 overflow-y-auto text-gray-500 bg-white border border-gray-700 rounded-md z-10 shadow-md mt-1 scrollbar-thin scrollbar-track-pink-100">
          {times.map((time) => (
            <div
              key={time}
              onMouseDown={() => onChange(time)} 
              className={`px-2 py-1 hover:bg-blue-400 text-gray-500 cursor-pointer ${
                value === time ? "bg-blue-500 text-white" : "text-gray-500"
              }`}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TimePicker = () => {
  const [startTime, setStartTime] = useState("11:00");
  const [endTime, setEndTime] = useState("12:00");

  return (
    <div className="flex items-center gap-3 text-white font-medium">
      <TimeDropdown label="Start Time" value={startTime} onChange={setStartTime} />
      <span className="bg-white text-black px-2">–</span>
      <TimeDropdown label="End Time" value={endTime} onChange={setEndTime} />
    </div>
  );
};

export default TimePicker;
