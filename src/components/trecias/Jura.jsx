import React from 'react'
import Valtis from './Valtis'
import Laivas from './Laivas'
import Sala from './Sala'
import data from "../../data/data";

export default function Jura() {
  return (
    <div>
    <Valtis info={data}/>
    <Laivas info={data} />
    <Sala info={data} />
    </div>
  )
}
