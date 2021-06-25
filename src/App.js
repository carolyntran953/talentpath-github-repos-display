import './App.css';
import './styles/button.css';
import styled from 'styled-components';
import TextField from './components/TextField';
import CheckboxQuestion from './components/CheckboxQuestion';

function App(props) {

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

  return (
    <div className="App">
      <ExampleForm className='example'>
        <h1>GitHub Repositories</h1>
        <TextField />
      </ExampleForm>
    </div>
  );
}

export default App;
