import React from 'react'

export default function Laivas(props) {
  return (
    <div>
        {props.info.map((e, i)=>{
            if (e.type === 'car'){
                return <span key={e.id} style={{color:`${e.color}`}}> CAR ({i})</span>
            }
        })}
    </div>
  )
}
