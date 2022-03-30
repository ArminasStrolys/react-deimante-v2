import React from 'react'

export default function Valtis(props) {
  return (
    <div>
        {props.info.map((e, i)=>{
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
