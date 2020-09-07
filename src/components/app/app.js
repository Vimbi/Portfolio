import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import Calculator from '../calculator';
import PomodoroClock from '../pomodoroclock';
import Drummachine from '../drummachine';
import AboutMe from '../about-me';
import Works from '../works';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

  render () {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Route path='/' component={AboutMe} exact />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/' component={Works} exact />
          <Route path='/works' component={Works} exact />
          
          <Route path='/calculator' component={Calculator} />
          <Route path='/pomodoroclock' component={PomodoroClock} />
          <Route path='/drummachine' component={Drummachine} />
          
          <Footer />
        </div>
      </Router>
    )
  }
}