import React from 'react'
import data from "../../data/data";

export default function Laivas() {
  return (
    <div>
    {data.map((e, i)=>{
        if (e.type === 'car'){
            return 'CAR (' + i + ') '
        }
    })}
</div>
  )
}
