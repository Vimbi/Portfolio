import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {

  state = {
    menuIcon: false
  }

  onMenuIconClick = () => {
    this.setState ((state) => {
      return {
        menuIcon: !state.menuIcon
      }
    })
  }

  render () {

    const {menuIcon} = this.state;
    let classNames = 'menu-icon';
    if (menuIcon) {
      classNames += ' menu-icon-active';
    }

    return (

      <div className='header-wrap'>

        <div className='logo'>
          <img src={require('../img/logo.png')} alt='logo'></img>
        </div>

        <div className='header-name'>
          <h3>Header</h3>
        </div>

        <div className='menu-wrapper'>

          <div className='menu-icon-wrapper'
                onClick={this.onMenuIconClick}>

            <div className={classNames}></div>
                  
          </div>

          <nav className='nav-wrapper'>   

            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
            </ul>

          </nav>

        </div>

      </div>
    )
  }
}