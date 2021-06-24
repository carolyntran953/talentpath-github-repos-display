import styled from 'styled-components';
import React, { Component } from 'react';
// import Radio from './Radio';
import RepoList from './RepoList';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
`

const TextInput = styled.input`
    width: 460px;
    height: 48px;
    margin-top: 26px;
    background: #F8FAFC;
    border-radius: 4px;
    border: none;
    text-align: left;
    position: static;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 2px 0px;

    &:focus {
        outline: none;
        border: 1.5px solid #4361ad;
        border-radius: 3px;
    }
`

const TextLabel = styled.label`
    width: 480px;
    height: 24px;
    text-align: left;
    color: #6F7482;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
`

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: '',
            repos: [] 
        }; 
    }

    handleChange(e) {
        this.setState({
            user: e.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        fetch(`https://api.github.com/users/${this.state.user}/repos`)
          .then(response => response.json())
          .then(data => {
              this.setState({repos: data});
              if (this.state.repos.length === 0) {
                  console.log('error: user does not exist');
              }
          });
    }

    render() {
        const btnStyle = {
            background:"#0048d9", 
            color:"#fff", 
            border:'none', 
            borderRadius:'4px',
            padding:'4px 16px' 
        }

        return (
          <div>
            <Container>
                <TextLabel for='user' >Enter a GitHub user: </TextLabel>
                <TextInput placeholder='Your answer' onChange={ (e) => this.handleChange(e) } />
            </Container>
            <button style={btnStyle} onClick={this.handleClick.bind(this)}>Submit</button>
            {/* <Radio repos={this.state.repos} /> */}
            <RepoList repos={this.state.repos} />
          </div>
        )
    }

}

export default TextField