import React from 'react';

import './pomodoroclock.css';

export default class PomodoroClock extends React.Component{
    constructor (props) {
      super (props);
      this.state = {
        sessionLength: 25,
        breakLength: 5,
        timer: 1500,
        timerStatus: 'stop',
        timerType: 'Session'
      };
      this.conversion = this.conversion.bind(this)
      this.reset = this.reset.bind(this)
      this.tick = this.tick.bind(this)
      this.tock = this.tock.bind(this)
      this.tickTock = this.tickTock.bind(this)
      this.breakDecrement = this.breakDecrement.bind(this)
      this.breakIncrement = this.breakIncrement.bind(this)
      this.sessionDecrement = this.sessionDecrement.bind(this)
      this.sessionIncrement = this.sessionIncrement.bind(this)
      this.changeTimer = this.changeTimer.bind(this)
      this.countDown = this.countDown.bind(this)
      this.play = this.play.bind(this)
      this.stop = this.stop.bind(this)
    }
    
    breakDecrement () {
      if (this.state.timerStatus == 'run') {
        return;
      } else if (this.state.breakLength === 1) {
        this.setState ({
          breakLength: 1
        })
      } else this.setState ({
          breakLength: this.state.breakLength - 1
        })
    }
    
    breakIncrement () {
      if (this.state.timerStatus == 'run') {
        return;
      } else if (this.state.breakLength === 60) {
        this.setState ({
          breakLength: 60
        })
      } else this.setState ({
          breakLength: this.state.breakLength + 1
        })
    }
    
    sessionDecrement () {
      if (this.state.timerStatus == 'run') {
        return;
      } else if (this.state.sessionLength === 1) {
        this.setState ({
          sessionLength: 1
        })
      } else this.setState ({
          sessionLength: this.state.sessionLength - 1
        })
      if (this.state.timer === 60) {
        this.setState ({
          timer: 60
        })
      } else this.setState ({
        timer: this.state.timer - 60
      })
    }
    
    sessionIncrement () {
      if (this.state.timerStatus == 'run') {
        return;
      } else if (this.state.sessionLength === 60) {
        this.setState ({
          sessionLength: 60
        })
      } else this.setState ({
          sessionLength: this.state.sessionLength + 1
        })
      if (this.state.timer === 3600) {
        this.setState ({
          timer: 3600
        })
      } else this.setState ({
        timer: this.state.timer + 60
      })
    }
    
    tickTock () {
      if (this.state.timerStatus === 'stop') {
        this.setState ({timerStatus: 'run'})
        this.countDown()
      } else {
        this.setState ({timerStatus: 'stop'});
        clearInterval(this.timerID)
      }    
    }
    
    countDown (){
      this.timerID = setInterval (() => {
          this.tock();
          this.tick();       
        }, 1000)
    }
    
    tick() {    
      if (this.state.timerType === 'Session' && this.state.timer < 0) {
        this.play()
        clearInterval(this.timerID)
        this.changeTimer('Break', this.state.breakLength * 60, 'stop')   
        this.tickTock()
           
      } else if (this.state.timerType === 'Break' && this.state.timer < 0) {
        clearInterval(this.timerID)
        this.changeTimer('Session', this.state.sessionLength * 60, 'stop')
        this.tickTock()
      }
    }
    
   tock () {    
      this.setState ({
        timer: this.state.timer - 1
      })
    }
    
    changeTimer(type, length, stop) {
      this.setState ({
        timerType: type,
        timer: length,
        timerStatus: stop
      })
    }
    
    play () {
      const audio = document.getElementById('beep')
      audio.play()
    }
    
    stop () {
      const audio = document.getElementById('beep');
      audio.pause();
      audio.currentTime = 0;
    }
   
    conversion () {
      let minute = Math.floor (this.state.timer / 60);
      let seconds = this.state.timer % 60;
      if (minute < 10) {minute = '0' + minute}
      if (seconds < 10) {seconds = '0' + seconds}
      return minute + ":" + seconds;
    }
    
    reset () {
      this.setState ({
        sessionLength: 25,
        breakLength: 5,
        timer: 1500,
        timerStatus: 'stop',
        timerType: 'Session'
      })
      this.stop();
      clearInterval(this.timerID);
    }
    
    render () {
      return (
        <div className="container-pomodoro">
          <div id='title'>Pomodoro Clock</div>
          <div className='time-title'>
            <div id="break-label">Break Length</div>
            <div id="session-label">Session Length</div>
          </div>
          <div>
          <div className='control-panel'>
            <div className='break'>
              <button id='break-decrement' className='button-pomodoro plus-minus' onClick={this.breakDecrement}>-</button>
              <div id="break-length">{this.state.breakLength}</div>
              <button id='break-increment' className='button-pomodoro plus-minus' onClick={this.breakIncrement}>+</button>
            </div>
            <div className='session'>
              <button id="session-decrement" className='button-pomodoro plus-minus' onClick={this.sessionDecrement}>-</button>
              <div id="session-length">{this.state.sessionLength}</div>
              <button id="session-increment" className='button-pomodoro plus-minus' onClick={this.sessionIncrement}>+</button>
            </div>
          </div>
          </div>
          <div id="timer-label">{this.state.timerType}</div>
          <div id='time-left'>{this.conversion()}</div>
          <div className='ss'>
            <button id="start_stop" className='button-pomodoro' onClick={this.tickTock}>start/stop</button>
            <button id="reset" className='button-pomodoro'  onClick={this.reset}>reset</button>
            <audio id='beep' src='https://clck.ru/Mpn8G' />
          </div>
        </div>      
      )
    }
}