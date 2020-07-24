import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
  
  render () {
    return (
      <div className='header'>
        <div className='logo'>
          <img src={require('../img/logo.png')} alt='logo'></img>
        </div>
        <h3>Header</h3>
        <nav className='nav-wrapper'>
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