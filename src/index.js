import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <div>Header
      <nav>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </nav>
    </div>
    <h1>My Portfolio</h1>
    <p>Portret</p>
    <div>Footer</div>
  </div>
  );

ReactDOM.render(el, document.getElementById('root'));