import React from 'react';

import './calculator.css';

const endsWithOperator = /[\+\-\*\/]$/;

export default class Calculator extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      display: '0',
      formula: ''
    };
    this.doNumber = this.doNumber.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
    this.doFormula = this.doFormula.bind(this)
    this.doDecimal = this.doDecimal.bind(this)
    this.doOperator = this.doOperator.bind(this)
    this.doCalculation = this.doCalculation.bind(this)
    
  }
  
  doOperator(event) {    
        
    if (this.state.display === '0' && event.target.value === '-') {
      this.setState({display: '-'})
    } else if (this.state.display.endsWith('+-') || this.state.display.endsWith('*-') || this.state.display.endsWith('/-') || this.state.display.endsWith('--')) {
      this.setState({display: this.state.display.slice(0, -2) + event.target.value})
    } else if (this.state.display.endsWith('-') && event.target.value === '-') {
      this.setState({display: this.state.display + event.target.value})
    } else if (this.state.display.endsWith('+') && event.target.value === '-') {
      this.setState({display: this.state.display + event.target.value})
    } else if (this.state.display.endsWith('*') && event.target.value === '-') {
      this.setState({display: this.state.display + event.target.value})
    } else if (this.state.display.endsWith('/') && event.target.value === '-') {
      this.setState({display: this.state.display + event.target.value})
    } else if (this.state.display.endsWith('-') && event.target.value !== '-') {
      this.setState({display: this.state.display.slice(0, -1) + event.target.value})
    } else if (this.state.display.endsWith('+') && event.target.value !== '-') {
      this.setState({display: this.state.display.slice(0, -1) + event.target.value})
    } else if (this.state.display.endsWith('*') && event.target.value !== '-') {
      this.setState({display: this.state.display.slice(0, -1) + event.target.value})
    } else if (this.state.display.endsWith('/') && event.target.value !== '-') {
      this.setState({display: this.state.display.slice(0, -1) + event.target.value})
    } else this.setState({display: this.state.display + event.target.value})
    
  }
  
  doCalculation(){
   this.setState((state) =>{return {display: eval(state.formula).toString()}});
  }
  
    
  doFormula() {
    let a = this.state.display;
    while (endsWithOperator.test(a)) {
         a = a.slice(0, -1);
          }
    this.setState({formula: this.state.formula + a});
    this.doCalculation();
    this.setState({formula: ''})
  }
  
  
  clearDisplay(){
    this.setState({display: '0', formula: ''})
  }
  
  doNumber(event){
    if (endsWithOperator.test(this.state.display)) {
      this.setState({formula: this.state.formula + this.state.display, display: event.target.value})      
      } else if(event.target.value === '.') {
      this.setState({display: this.state.display + event.target.value})}
        else if (this.state.display === '0') {
         this.setState({display: event.target.value})
        } else {
        this.setState({display: this.state.display + event.target.value})
      }
 }  
 
  
  doDecimal() {
   if(/[.]/.test(this.state.display)) {
      this.setState({display: this.state.display})
    } else {
      this.setState({display: this.state.display + '.'})
    }
  }
  
  render () {
    return (
    <div className="container">
        <div id='calculator'>
          
          <div id='display'>{this.state.display}</div>
          
          <div id='keypad'>
            
            <button id='seven' value='7' onClick={this.doNumber}>7</button>
            
            <button id='eight' value='8' onClick={this.doNumber}>8</button>
            
            <button id='nine' value='9' onClick={this.doNumber}>9</button>
            
            <button id='divide' value='/' onClick={this.doOperator}>/</button>
            
            <button id='clear' onClick={this.clearDisplay}>C</button>
            
            <button id='four' value='4' onClick={this.doNumber}>4</button>
            
            <button id='five' value='5' onClick={this.doNumber}>5</button>
            
            <button id='six' value='6' onClick={this.doNumber}>6</button>
            
            <button id='multiply' value='*' onClick={this.doOperator}>*</button>
            
            <button id='equals' value='=' onClick={this.doFormula}>=</button>
            
            <button id='one' value='1' onClick={this.doNumber}>1</button>
            
            <button id='two' value='2' onClick={this.doNumber}>2</button>
            
            <button id='three' value='3' onClick={this.doNumber}>3</button>
                     
            <button id='subtract' value='-' onClick={this.doOperator}>-</button>
            
            <button id='zero' value='0' onClick={this.doNumber}>0</button>
            
            <button id='decimal' value='.' onClick={this.doDecimal}>.</button>
            
            <button id='add' value='+' onClick={this.doOperator}>+</button>
            
          </div>
        </div>
    </div>
    )
  }
}