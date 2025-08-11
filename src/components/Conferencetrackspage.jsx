import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage