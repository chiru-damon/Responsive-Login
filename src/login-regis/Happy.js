import React from 'react'
import "./Happy.css"
const img = require('./logo512.png')

export default function Happy() {
  return (
    <div id="happy" style={window.outerWidth<760?{width:'95%',height:'70%'}:{width:'49%'}}>
      <img src={img} alt=""></img>
    </div>
  )
}
