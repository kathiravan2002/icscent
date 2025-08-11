import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage