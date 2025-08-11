import React from 'react'
import Datesandbank from '../shared/components/Datesandbank'
import HelmetComponent from './HelmetComponent'

function Datesandbankpage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/key-dates'} />
      <Datesandbank />
    </div>
  )
}

export default Datesandbankpage