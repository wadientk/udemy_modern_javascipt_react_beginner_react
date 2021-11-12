import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div class="input-area common-style">
        <input id="add-text" placeholder="input task here, please" />
        <button id="add-button">Add</button>
      </div>

      <div class="undone-area common-style">
        <p class="area-title">undone</p>
        <ul>
          <li>
            <div class="list-row">
              <p>Learning react</p>
              <button>Complete</button>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </div>

      <div class="done-area common-style">
        <p class="area-title">done</p>
        <ul>
          <li>
            <div class="list-row">
              <p>Learning Angular</p>
              <button>mark undone</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
