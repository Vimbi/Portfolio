import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
  
  render () {
    return (
      <div className='header'>
        <h3>Header</h3>
        <nav>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </nav>
      </div>
    )
  }
}