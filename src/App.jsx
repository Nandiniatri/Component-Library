import { useState } from 'react'
import './App.css'
import Input from './input/input'
function App() {
  const [value,setValue] = useState('')
  return (
    <>
      <h3>Normal type Input</h3>
      <div className='input-container'>
        <Input placeholder={"Basic usage"} className={"simple-input"} type={"text"} onchange={(e) => setValue(e.target.value)} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Fill your Password"} className={"password-input"} type={"password"} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Fill your Email Id"} className={"email-input"} type={"email"} />
      </div>
      <div className='input-container'>
        <Input placeholder={"Please Enter a Number"} className={"number-input"} type={"number"} />
      </div>
      <div className='twotype-inputContainer'>
        <Input className={"small-input"}/><Input className={"medium-input"}/>
      </div>
      <div className='threetype-inputConatiner'>
        <Input type={"search"} className={"inner-com"} placeholder={"Large-Size"}/> <Input className={"outer-com"} placeholder={"Another-Size"}/>
      </div>

      <div className='threetype-inputConatiner'>
        <Input type={"search"} className={"innersecond-com"} placeholder={"Large-Size"} value={"https://"}/> <Input className={"outersecond-com"} placeholder={"Another-Size"}/>
      </div>
      <div className='input-container'>
        <Input type={"spinner"} className={"simple-input"} placeholder={"input Search Loading default"}/>
      </div>
      <div className='input-container'>
          <Input type={"spinnerbutton"} className={"simple-input"} placeholder={"input Search Loading default"}/>
      </div>
      <div className='search-inputButtonText'>
          <Input type={"spinnerButtonText"}/>
      </div>
      <p>{value}</p>
    </>   
  )
}

export default App