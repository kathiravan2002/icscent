import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Science, Engineering and Technology'} canonical={'https://icscent.com/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage