import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
import { BiRun } from 'react-icons/bi'


function App() {

  const [gender, setGender] = useState('None yet')
  const [terminaison, setTerminaison] = useState('')
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [prefix, setPrefix] = useState('')
  const [content, setContent] = useState('')
  

  const maleHandler = () => {
    setGender('Il')
    setTerminaison('é')
  }

  const femaleHandler = () => {
    setGender('Elle')
    setTerminaison('ée')
  }

  const nameHandler = event => {
    setName(event.target.value)
    let vowels = ['A', 'E', 'I', 'O', 'U']
    if (vowels.includes(name.toUpperCase()[0])) {
      setPrefix("d'")
    } else {
      setPrefix("de ")
    }
  }

  const schoolHandler = event => {
    setSchool(event.target.value)
  }

  const generateHandler = () => {
    setContent(`${name} souhaite postuler aux universitées anglaises. Son école préferé est ${school}. ${gender} est passion${terminaison} des sciences. Merci de lire la lettre ${prefix}${name}`)
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          simple-ucas
        </header>
      </div>  
      <body>
      <div className="button-container">
          <button className="gender-button" onClick={maleHandler}><FcBusinessman /></button>
      </div>
      <div className="button-container">                    
          <button className="gender-button" onClick={femaleHandler}><FcBusinesswoman /></button>        
      </div>
      <div className="all-inputs">
      <label className="input-label">Student name:</label>  
      <div className="input-field">      
      <input
      type="text"
      name="name"
      onChange={nameHandler}
      value={name}
      />  
      </div>
      <label className="input-label">Current school:</label>  
      <div className="input-field">
      <input
      type="text"
      name="name"
      onChange={schoolHandler}
      value={school}
      />  
      </div>
      <div className="input-field">
        <input type="text" />      
      </div>  
      </div>    
      <div className="generate-button-container">
        <button className="generate-button" onClick={generateHandler}><BiRun /></button>
      </div>
      <div className="text-content">
        <p>{content}</p>
      </div>            
      </body>
    </div>
  );
}

export default App;
