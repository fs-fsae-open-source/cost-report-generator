import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PartEditor } from './components/PartEditor'
import { Part } from './models/part'

function App() {
  const part: Part = {
    name: "testPart"
  };

  return (
    <>
      <PartEditor part={part} />
    </>
  )
}

export default App
