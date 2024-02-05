import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Content from './components/content'
import data from './components/data'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  const cards =data.map(item => {
    return(
        <Card
          key={item.id}
          {...item}
        />
    )
  })

  return (
    <div>
      <Header/>
      <Content/>
      {cards}
    </div>
  )
}

export default App
