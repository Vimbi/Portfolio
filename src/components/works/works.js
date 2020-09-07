import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './works.css';

export default class Works extends Component {

    render () {
        return (
            <div className='works-container'>
                <h2>Works</h2>
                <ul className='works-list'>

                    <li className='work-item'>
                        <Link to='/calculator' className='work-link'>Calculator</Link>
                        <img src={require('../img/calc.jpg')} alt='calculator' width='380'></img>
                    </li>

                    <li className='work-item'>
                        <Link to='/drummachine' className='work-link'>Drummachine</Link>
                        <img src={require('../img/drum.jpg')} alt='calculator' width='380'></img>
                    </li>

                    <li className='work-item'>
                        <Link to='/pomodoroclock' className='work-link'>Pomodoro Clock</Link>
                        <img src={require('../img/pomodoro.jpg')} alt='calculator' width='380'></img>
                    </li>
                    
                </ul>
            </div>
        )
    }
}