import { useState } from 'react'
import SearchForm from "./components/SearchForm";
import ReadingBlock from "./components/ReadingBlock";


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <h1>Monika's Bookstore!</h1>
    <SearchForm />
        
     
    </div>
    </>
  )
}

export default App
