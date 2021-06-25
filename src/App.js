import React, { Component } from 'react';
import './App.css';
import './styles/button.css';
import styled from 'styled-components';
import TextField from './components/TextField';
import RepoList from './components/RepoList';
const axios = require('axios');

const ExampleForm = styled.form`
  margin-top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-color:#3B4256;
  border-radius: 6px;
  background-color: #EFF0F3;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        repos: [],
        errorMessage: '' 
    }; 
  }

  handleSubmitClick(user) {
    axios.get(`https://api.github.com/search/repositories?q=user:${user}&page=1&per_page=50`)
      .then(response => {
          this.setState({
              repos: response.data.items,
              errorMessage: ''
            });
          console.log('number of repos: ', this.state.repos.length);
      }).catch(error => {
          if (!user) {
            this.setState({ errorMessage: 'username is required' });
          } else if (error.response.status === 404) {
            this.setState({ errorMessage: 'username does not exist' });
          }
      });
  }
  
  render() {
    return (
      <div className="App">
        <ExampleForm className='example'>
          <h1>GitHub Repositories</h1>
          <TextField onSubmitClick={this.handleSubmitClick.bind(this)} />
        </ExampleForm>
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
