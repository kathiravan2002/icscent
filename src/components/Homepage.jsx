import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/'} />
      <Home />
    </div>
  )
}

export default Homepage