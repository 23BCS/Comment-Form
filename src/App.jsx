import { useState } from 'react'
import CommentForm from './CommentForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CommentForm/>
    </>
  )
}

export default App
