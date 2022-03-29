import React from 'react'
import Daiktas from '../daiktas/Daiktas'

export default function Tvenkinys() {
  return (
    <div>
    <Daiktas poriniai={2} />
    <Daiktas neporiniai={2} />
    </div>
  )
}
