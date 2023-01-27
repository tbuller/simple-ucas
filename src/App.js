import logo from './logo.svg';
import './App.css';
import { react, useState, state, onChange } from 'react'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'


function App() {

  const [gender, setGender] = useState('None yet')
  const [terminaison, setTerminaison] = useState('')
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [prefix, setPrefix] = useState('')
  

  const maleHandler = () => {
    setGender('Male')
    setTerminaison('é')
  }

  const femaleHandler = () => {
    setGender('Female')
    setTerminaison('ée')
  }

  const nameHandler = event => {
    setName(event.target.value)
    let vowels = ['A', 'E', 'I', 'O', 'U']
    if (vowels.includes(name.toUpperCase()[0])) {
      setPrefix("d'")
    } else {
      setPrefix("de")
    }
  }

  const schoolHandler = event => {
    setSchool(event.target.value)
  }

  console.log(prefix)

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
      <input
      type="text"
      name="name"
      onChange={nameHandler}
      value={name}
      />  
      </div>
      <div className="input-field">
      <input
      type="text"
      name="name"
      onChange={schoolHandler}
      value={school}
      />  
      </div>            
      </body>
    </div>
  );
}

export default App;
