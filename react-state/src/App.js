import Person from './Person'
import React, { useState } from 'react'

const App = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={()=>setVisible(!isVisible)}>CLICK</button>
      <div style={{display : !isVisible ? 'none' :'flex'}}>
        <Person />
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </div>
  )
}

export default App