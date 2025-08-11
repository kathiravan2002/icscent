import React from 'react'
import Organizing from '../shared/components/Organizing'
import HelmetComponent from './HelmetComponent'

function Organizingpage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/organizing-committee'} />
      <Organizing />
    </div>
  )
}

export default Organizingpage