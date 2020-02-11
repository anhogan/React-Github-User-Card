import React, { Component } from 'react';
import Header from './components/Header';
import UserCard from'./components/UserCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  };

  componentDidMount() {
    fetch('https://api.github.com/users/anhogan')
      .then(response => {
        this.setState({user: response.data});
        return fetch('https://api.github.com/users/anhogan/followers');
      })
      .then(response => {
        this.setState({followers: response});
        console.log(this.state.followers);
      })
      .catch(error => {
        console.log(error.message)
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
