import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  // Mouse coordinates track karne ke liye state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Mouse ke move hone par position calculations
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    setMousePos({ x: clientX, y: clientY })
  }

  return (
    // Main Wrapper: tracking mouse pointer activity, giving deep black void universe canvas
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full bg-[#02040a] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none"
    >
      
      {/* LAYER 1: Interactive Mouse Interactive Spotlight Glow (Follows your cursor seamlessly) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-40 blur-[130px] transition-all duration-300 ease-out hidden sm:block"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)'
        }}
      />

      {/* LAYER 2: Extreme Poppy Futuristic Cyber Grid Blueprint Sheet */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, #22d3ee 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #22d3ee 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          // Mouse shift distortion simulation (adds subtle 3D depth movement)
          transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
        }}
      />

      {/* LAYER 3: Stable Central Cyber-Engine Colored Pillars */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[4000ms]" />

      {/* CONTENT LAYER: Raised interface layouts with heavy drop-glow properties */}
      <div className="w-full max-w-xl flex flex-col items-center space-y-5 relative z-10 drop-shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-transform duration-500 hover:scale-[1.005]">
        
        <AddTodo/> 
        <Todos/> 
        
      </div>
    </div>
  )
}

export default App