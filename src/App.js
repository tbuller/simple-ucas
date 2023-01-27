import logo from './logo.svg';
import './App.css';
import { react, useState, state, onChange } from 'react'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'


function App() {

  const [gender, setGender] = useState('None yet')
  const [terminaison, setTerminaison] = useState('')
  const [school, setSchool] = useState('')
  const [prefix, SetPrefix] = useState('')

  const maleHandler = () => {
    setGender('Male')
    setTerminaison('é')
  }

  const femaleHandler = () => {
    setGender('Female')
    setTerminaison('ée')
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
        </header>
      </div>  
      <body>
      <div className="button-container">
          <button className="male-button" onClick={maleHandler}><FcBusinessman /></button>
      </div>
      <div className="button-container">                    
          <button className="female-button" onClick={femaleHandler}><FcBusinesswoman /></button>        
      </div>
      <div className="input-field">
        <input />  
      </div>
      <div className="input-field">
        <input />
      </div>            
      </body>
    </div>
  );
}

export default App;
