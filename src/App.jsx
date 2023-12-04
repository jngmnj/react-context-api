import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './components/ColorBox'
import ColorContext from './contexts/color'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Provider를 사용할때는 value값을 꼭 명시해주어야 제대로 작동한다.
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  )
}

export default App
