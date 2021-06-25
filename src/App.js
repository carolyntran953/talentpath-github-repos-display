import React, { useState } from 'react';
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

function App() {
  const [repos, setRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitClick = (user) => {
    if (!user) {
      setErrorMessage('username is required');
    } else {
      axios.get(`https://api.github.com/search/repositories?q=user:${user}&page=1&per_page=50`)
      .then(response => {
          setRepos(response.data.items);
          setErrorMessage('');
          console.log('number of repos: ', repos.length);
      }).catch(error => {
          if (error.response.status >= 400 && error.response.status < 500) {
            setErrorMessage('invalid username' );
          }
      });
    }
  }
  
    return (
      <div className="App">
        <ExampleForm className='example'>
          <h1>GitHub Repositories</h1>
          <TextField onSubmitClick={handleSubmitClick} errorMessage={errorMessage} />
        </ExampleForm>
        {!errorMessage && <RepoList repos={repos} />}
      </div>
    );
}

export default App;
