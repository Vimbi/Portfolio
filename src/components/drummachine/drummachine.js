import React from 'react';

import './drummachine.css';

const arrButtons = [
    {
      key: "Q",
      eventCode: "KeyQ",
      src: "https://clck.ru/MQxfM",
      clipName: "Bass"
    },
    {
      key: "W",
      eventCode: "KeyW",
      src: "https://clck.ru/MQxhs",
      clipName: "Floor"
    },
    {
      key: "E",
      eventCode: "KeyE",
      src: "https://clck.ru/MQxkU",
      clipName: "Snare"
    },
    {
      key: "A",
      eventCode: "KeyA",
      src: "https://clck.ru/MQxmX",
      clipName: "Rack"
    },
    {
      key: "S",
      eventCode: "KeyS",
      src: "https://clck.ru/MQxnW",
      clipName: "Hi-hat"
    },
    {
      key: "D",
      eventCode: "KeyD",
      src: "https://clck.ru/MQxoX",
      clipName: "Crash"
    },
    {
      key: "Z",
      eventCode: "KeyZ",
      src: "https://clck.ru/MQxpY",
      clipName: "Ride"
    },
    {
      key: "X",
      eventCode: "KeyX",
      src: "https://clck.ru/MQxqP",
      clipName: "Splash"
    },
    {
      key: "C",
      eventCode: "KeyC",
      src: "https://clck.ru/MQxri",
      clipName: "China"
    }
  ];
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.play = this.play.bind(this);
    }
    
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    handleKeyPress(event) {
      if (event.code == this.props.eventCode) {
        const audio = document.getElementById(this.props.padName);
        audio.play();
        this.props.display(this.props.clipName);
      }
    }
    play() {
      const audio = document.getElementById(this.props.padName);
      audio.play();
      this.props.display(this.props.clipName);
    }
    render() {
      return (
        <div
          className="drum-pad"
          onClick={this.play}
          clipName={this.props.clipName}
          id={this.props.eventCode}
        >
          <audio
            className="clip"
            id={this.props.padName}
            src={this.props.sound}
          ></audio>
          {this.props.padName}
        </div>
      );
    }
  }
  
  class PadBank extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="pad-bank">
          {this.props.PadBank.map((obj, i, arr) => {
            return (
              <DrumPad
                display={this.props.display}
                clipName={arr[i].clipName}
                sound={arr[i].src}
                padName={arr[i].key}
                eventCode={arr[i].eventCode}
              />
            );
          })}
        </div>
      );
    }
  }
  
export default class Drummachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        PadBank: arrButtons,
        display: ""
      };
      this.updateDisplay = this.updateDisplay.bind(this);
    }
  
    updateDisplay(e) {
      this.setState({ display: e });
    }
  
    render() {
      return (
        <div className="container-drum">
          <div id="drum-machine">
            <PadBank PadBank={this.state.PadBank} display={this.updateDisplay} />
  
            <div id="controls-container">
              <div id="display-drum">{this.state.display}</div>
            </div>
          </div>
        </div>
      );
    }
}
  