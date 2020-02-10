import React, { Component } from 'react';
import Header from './components/Header';
import UserCard from'./components/UserCard';
import axios from 'axios';
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
      .then(followers => {
        this.setState({followers: followers.data});
        console.log(this.state.followers);
      })
      .catch(error => {
        console.log(error.message)
      });

    axios.get('https://api.github.com/users/anhogan/followers')
      .then(response => {
        this.setState({followers: response.data});
        console.log(this.state.followers);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <UserCard />
      </div>
    );
  }
}

export default App;
