// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
    console.log("Clock component was mounted!");
    //  this.interval = setInterval(() => this.tick(), 1000);
     this.interval = setInterval(() => this.updateDate(), 1000);
  }

  componentWillUnmount() {
    // this.clearInterval(this.interval)
  }
}


export default App;

