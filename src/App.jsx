import React, { useState, useEffect } from 'react';
import UndoneTasks from './components/UndoneTasks';
import './style.css';

export default function App() {
  const [undoneTasks, setUndoneTasks] = useState([]);

  useEffect(() => {
    const undones = [
      {
        id: 1,
        name: 'Learning react',
      },
      {
        id: 2,
        name: 'Learning JSX',
      },
    ];

    const dones = [
      {
        id: 1,
        name: 'earning Angular',
      },
      {
        id: 2,
        name: 'Learning JS',
      },
    ];

    setUndoneTasks(undones);
  }, []);

  return (
    <>
      <div className="input-area common-style">
        <input id="add-text" placeholder="input task here, please" />
        <button id="add-button">Add</button>
      </div>

      <div className="undone-area common-style">
        <p className="area-title">undone</p>
        <ul>
          <UndoneTasks tasks={undoneTasks} />
          {/* {undoneTasks.forEach((undone) => {
            console.log(undone);
            return <UndoneTasks tasks={undone} />;
          })} */}
        </ul>
      </div>

      <div className="done-area common-style">
        <p className="area-title">done</p>
        <ul>
          <li>
            <div className="list-row">
              <p>Learning Angular</p>
              <button>mark undone</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
