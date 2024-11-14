import './App.css'
import Button from './Common-components/button'
import Heading from './Common-components/heading'
import Input from './Common-components/input'

function App() {

  return (
    <>
    <h3>First Component</h3>
     <Input />
     <h3>Button Compoenent</h3>
     <Button>{"Click me"}</Button>
     <h3>Heading Compoenent</h3>
     <Heading level={1} >Hello satyam</Heading>
     <Heading level={3}>Yes bhaiya</Heading>
    </>
  )
}

export default App
