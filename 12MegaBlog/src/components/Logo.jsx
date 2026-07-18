import React from 'react'
import image from '../assets/Logo.avif'

function Logo({width='100px'}) {
  return (
    <img src={image} width={width} alt="" />
  )
}

export default Logo