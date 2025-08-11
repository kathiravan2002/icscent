import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage