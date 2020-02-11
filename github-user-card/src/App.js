import React, { Component } from 'react';
import Header from './components/Header';
import UserCard from'./components/UserCard';
import UserFollowers from './components/UserFollowers';
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
    axios.get('https://api.github.com/users/anhogan')
      .then(response => {
        this.setState({user: response.data});
        console.log(this.state.user);
        return axios.get('https://api.github.com/users/anhogan/followers')
          .then(response => {
            this.setState({followers: response.data});
            console.log(this.state.followers);
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message)
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <UserCard user={this.state.user} />
        <UserFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
