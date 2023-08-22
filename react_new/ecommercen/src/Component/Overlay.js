import React from 'react'

const Overlay = ({ children, showOverlay }) => {
    if (!showOverlay) return null; 
  return (
    
    <div className="fixed inset-0 z-50 flex items-center  justify-center backdrop-filter backdrop-blur-sm">
    <div className="absolute inset-0  opacity-25 bg-black"></div>
    <div className="relative bg-black h-[400px] w-[600px]">{children}</div>
  </div>
  )
}

export default Overlay;