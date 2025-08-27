import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {

  const [progress, setProgress] = useState(0)
  
  function updateProgress() {
    if (progress < 100) {
      setProgress(progress + 10)
    }
  }
  return (
    <>
      <ProgressBar progress = {progress} />
      <button onClick={updateProgress}>Increase Progress </button>
    </>
  )
}

export default App
