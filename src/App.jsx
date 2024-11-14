import { useState } from 'react'
import './App.css'
import DropDown from './Dropdown/dropdown' 
 
function App() {  
  const options =["Drop-1","Drop-2","Drop-3","Drop-4","Drop-5"]
  return (
    <>
     <h3>Feature Dropdown</h3>
     <DropDown options={options} label={"Choose a Items"}/>
    </>
  )
}

export default App