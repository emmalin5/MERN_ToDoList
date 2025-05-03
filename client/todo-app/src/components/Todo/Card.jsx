// import React, { useState } from 'react';

// const Card = ({ title, time, status: initialStatus = 'pending', onComplete }) => {
//   const [status, setStatus] = useState(initialStatus);

//   const toggleComplete = () => {
//     const newStatus = status === 'completed' ? 'pending' : 'completed';
//     setStatus(newStatus);
//     onComplete?.(newStatus);
//   };

//   const isCompleted = status === 'completed';

//   return (
//     <div
//       className={`w-full mt-5 border border-gray-200 px-4 pt-4 pb-4 flex flex-col rounded-xl shadow-md transition 
//       ${isCompleted ? 'bg-gray-100 text-gray-500' : 'bg-white text-gray-700'}`}
//     >
//       <div className="flex items-center gap-3">
//         <button
//           onClick={toggleComplete}
//           className={`w-5 h-5 p-2 flex items-center justify-center text-xs rounded-full border-2 border-blue-400 
//             ${isCompleted ? 'bg-white-400 text-white' : 'bg-white'} transition`}
//         >
//           {isCompleted ? '✔️' : ''}
//         </button>
            
//         <p className={`text-lg font-semibold transition break-all whitespace-normal 
//           ${isCompleted ? 'line-through' : 'text-blue-gray-900'}`}>
//           {title}
//         </p>
//       </div>

//       <p className={`mt-2 text-sm font-light transition ${isCompleted ? 'line-through' : ''}`}>
//         {time}
//       </p>
//     </div>
//   );
// };

// export default Card;


import React, { useState } from 'react';

const pastelColors = [
  'bg-pink-100',
  'bg-purple-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-blue-100',
  'bg-rose-100',
  'bg-teal-100',
];

const Card = ({ title, time, status: initialStatus = 'pending', onComplete, colorIndex = 0 }) => {
  const [status, setStatus] = useState(initialStatus);
  const isCompleted = status === 'completed';

  const toggleComplete = () => {
    const newStatus = isCompleted ? 'pending' : 'completed';
    setStatus(newStatus);
    onComplete?.(newStatus);
  };

  const bgColor = isCompleted ? 'bg-gray-100 text-gray-500' : `${pastelColors[colorIndex % pastelColors.length]} text-gray-700`;

  return (
    <div className={`w-full mt-5 border border-gray-200 px-4 pt-4 pb-4 flex flex-col rounded-xl shadow-md transition ${bgColor}`}>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleComplete}
          className={`w-5 h-5 p-2 flex items-center justify-center text-xs rounded-full border-2 border-blue-400 
            ${isCompleted ? 'bg-white text-white' : 'bg-white'} transition`}
        >
          {isCompleted ? '✔️' : ''}
        </button>

        <p className={`text-lg font-semibold transition break-all whitespace-normal 
          ${isCompleted ? 'line-through' : 'text-blue-gray-900'}`}>
          {title}
        </p>
      </div>

      <p className={`mt-2 text-sm font-light transition ${isCompleted ? 'line-through' : ''}`}>
        {time}
      </p>
    </div>
  );
};

export default Card;
