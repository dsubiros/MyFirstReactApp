// import logo from './logo.svg';
import './App.css';
import React from 'react';

function CounterApp() {
  return (
    <div className="CounterApp">
      <h1>Counter App</h1>
      <Counter/>
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, date: (new Date()).toLocaleTimeString() };
    
  }

  render() {
    // return <div>Hello I'm a clock {this.state.seconds}</div>;
    return <h1>Hello I'm a clock {this.state.date}</h1>;
  }

  // tick = () => this.setState(state => ({seconds: state.seconds += 1}));

  updateDate = () => this.setState(state => ({...state, date: (new Date()).toLocaleTimeString()}));
  
  // clearInterval = null;

  componentDidMount() {
    console.log("Counter component was mounted!");
     this.interval = setInterval(() => this.updateDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default CounterApp;

