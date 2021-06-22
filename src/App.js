import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import TextFeild from './components/TextFeild'
import CheckboxQuestion from './components/CheckboxQuestion'
import Radio from './components/Radio'

function App() {

  const ExampleForm = styled.form`
    margin-top: 100px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border-color:#3B4256;
    border-radius: 6px;
    background-color:rgb(255, 255, 255);
  `

  return (
    <div className="App">
      <ExampleForm className='example'>
        <TextFeild />
        <CheckboxQuestion />
        <Radio />
      </ExampleForm>
    </div>
  );
}

export default App;
