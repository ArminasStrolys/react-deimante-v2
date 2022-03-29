import React from 'react'
import data from "../../data/data";

export default function Valtis() {
  return (
    <div>
        {data.map((e, i)=>{
          if (e.color === 'yellow' && e.type === 'man'){
            return <span key={e.id} style={{backgroundColor:'yellow'}}> VALTIS ({i})</span>
          }
            if (e.type === 'man'){
                return <span key={e.id} style={{color:`${e.color}`}}> VALTIS ({i})</span>
            }
        })}
    </div>
  )
}
