import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
    let classIcon = 'menu-icon-line';
    let classMobileNav = 'mobile-nav';
    if (menuIcon) {
      classIcon += ' menu-icon-line-active';
      classMobileNav += ' mobile-nav--active';
    }

    return (

      <div className='header-wrap'>

        <div className='logo'>
          <img src={require('../img/logo.png')} alt='logo'></img>
        </div>

        <div className='header-name'>
          <h3><Link to='/'>My Portfolio</Link></h3>
        </div>

        <div className='menu-wrapper'>

          {/* ------ Десктопная навигация ----- */}

            <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='/aboutme' className='nav-link'>Обо мне</Link>                
              </li>

              <li className='nav-item'>
                <Link to='/works' className='nav-link'>Работы</Link>

                <ul className='nav-works'>
                  <li><Link to='/calculator' className='nav-link'>Calculator</Link></li>
                  <li><Link to='/drummachine' className='nav-link'>Drummachine</Link></li>
                  <li><Link to='/pomodoroclock' className='nav-link'>Pomodoro Clock</Link></li>
                </ul>
              </li>
              
            </ul>

          {/* ------ Кнопка для мобильной навигации ----- */}

          <div className='menu-icon'
                onClick={this.onMenuIconClick}>

            <div className={classIcon}></div>
                  
          </div>

          {/* --------- Мобильная навигация ---------------- */}

          <div className={classMobileNav}>
            <div className='mobile-nav_title'>Навигация</div>

            <ul className='mobile-nav_list'>
              <li className='mobile-nav_item'>
                <a href='#' className='mobile-nav_link'>Обо мне</a>
              </li>
              <li className='mobile-nav_item'>
                <a href='#' className='mobile-nav_link'>Работы</a>
              </li>
              <li className='mobile-nav_item'>
                <a href='#' className='mobile-nav_link'>Контакты</a>
              </li>
            </ul>

          </div>

        </div>

      </div>
    )
  }
}