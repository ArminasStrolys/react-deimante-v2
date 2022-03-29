import React from 'react'
import data from "../../data/data";

export default function Sala() {
  return (
    <div>
    {data.map((e, i)=>{
        if (e.type === 'fish'){
            return 'FISH (' + i + ') '
        }
    })}
</div>
  )
}
