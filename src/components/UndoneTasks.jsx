import React from 'react';

const UndoneTasks = ({ tasks }) => {
  return (
    <>
      {tasks.forEach((task) => {
        return (
          <li key={task.id}>
            <div className="list-row">
              <p>{task.name}</p>
              <button>Complete</button>
              <button>Delete</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default UndoneTasks;
