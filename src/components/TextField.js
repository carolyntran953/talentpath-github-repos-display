import styled from 'styled-components';
import React, { Component } from 'react';

const Container = styled.div`
    display: block;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
`

const TextInput = styled.input`
    display: block;
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
    padding-left: 12px;

    &:focus {
        outline: none;
        border: 1.5px solid #4361ad;
        border-radius: 3px;
    }
`

const TextLabel = styled.label`
    display: block;
    width: 480px;
    height: 24px;
    text-align: left;
    color: #6F7482;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
`

const ErrorMessage = styled.span`
    display: block;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ED0131;
`

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: null
        }; 
    }

    handleChange(e) {
        this.setState({
            user: e.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onSubmitClick(this.state.user);
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
                <TextLabel for='user' ><span>Enter a GitHub user </span><span style={{color: "#ED0131"}}>*</span></TextLabel>
                <TextInput placeholder='Text' onChange={ (e) => this.handleChange(e) } />
                <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
            </Container>
            <button style={btnStyle} onClick={this.handleClick.bind(this)}>Submit</button>
          </div>
        )
    }

}

export default TextField