import React from 'react'

export default function Sala(props) {
  return (
    <div>
        {props.info.map((e, i)=>{
            if (e.type === 'fish'){
                return <span key={e.id} style={{backgroundColor:'yellow'}}> FISH ({i})</span>
            }
        })}
    </div>
  )
}
