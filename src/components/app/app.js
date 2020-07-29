import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import Calculator from '../calculator';

import './app.css';

export default class App extends Component {

  render () {
    return (
      <div className='app'>
        <Header />
        <h1>My Portfolio</h1>
        <p>Portret</p>
        <Calculator />  
        <Footer />
      </div>
    )
  }
}