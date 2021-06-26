import styled from 'styled-components';
import React, { useState } from 'react';

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

  &:invalid {
    border: 1px solid #ED0131;
    box-sizing: border-box;
    border-radius: 4px;
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
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #ED0131;
`

const Button = styled.button`
  border-radius: 6px;
  padding: 4px, 16px;
  width: 92px;
  background-color: #0048D9;
  color: #ffffff;
  border: none;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  &:hover {
    background-color: #002266;
    cursor: pointer;
  }
`

function TextField(props) {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
    console.log('user: ', user);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.onSubmitClick(user);
  }

  const errStyle = {
    border: "1px solid #ED0131",
    boxSizing: "border-box",
    borderRadius: "4px"
  }

  return (
    <div>
      <Container>
        <TextLabel htmlFor='user' ><span>Enter a GitHub user </span><span style={{color: "#ED0131"}}>*</span></TextLabel>
        <TextInput style={props.errorMessage ? errStyle : null} placeholder='Text' onChange={ (e) => handleChange(e) } />
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      </Container>
      <Button onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default TextField;