import './App.css'
import Button from './components/button component/Button'
import ImageComp from './components/image component/Image'
import Input from './components/input component/Input'

function App() {
  const handleClick = () =>{
    alert("imageClicked")
}

  return (
    <>
      <Button >Button</Button>
      <Input type = "search" placeHolder = "type the text..." />

      <ImageComp url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s" width="200px" height="200px" />

      <ImageComp url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s" width="200px" height="200px" onClick={handleClick} />
    </>
  )
}

export default App
