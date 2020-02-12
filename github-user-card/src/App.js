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
      followers: [],
      input: ''
    };
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/anhogan')
      .then(response => {
        this.setState({user: response.data});
        return axios.get('https://api.github.com/users/anhogan/followers')
          .then(response => {
            this.setState({followers: response.data});
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message)
      });
  };

  handleChange = (event) => {
    this.setState({input: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(response => {
        this.setState({user: response.data});
        return axios.get(`https://api.github.com/users/${this.state.input}/followers`)
          .then(response => {
            this.setState({followers: response.data});
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <UserCard user={this.state.user} followers={this.state.followers} input={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
