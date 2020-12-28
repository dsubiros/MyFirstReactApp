// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import axios from 'axios';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <h1>I'm a Todo App</h1>
        <TodoList items={this.state.items}/>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Todo text: </label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text} autocomplete="off"/>

          <button>Add Todo #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text.length === 0)
      return;

    const newItem = {
      text: this.state.text,
      id: new Date()
    }

    this.setState(state => ({
      items: this.state.items.concat(newItem),
      text: ''
    }));    
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({text: e.target.value});
    e.target.focus();
  }

  async componentDidMount() {
    console.log("Counter component was mounted!");
    //  await axios.get('http://localhost:5000/blogs');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

class TodoList extends React.Component {
  render() {
    return ( 
      <ul>
        {
            !this.props.items.length ? 
            <li>No items were found.</li> : 
            this.props.items.map(item => 
              (<li key={item.id}>{item.text}</li>))
        }
      </ul>
    );
  }
}

export default TodoApp;

// function TodoApp() {
//   return (
//     <div className="TodoApp">
//       <h1>Todo App</h1>
//       <TodoWrapper/>
//     </div>
//   );
// }