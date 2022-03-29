import React from 'react'
import data from "../../data/data";

export default function Valtis() {
  return (
    <div>
        {data.map((e, i)=>{
            if (e.type === 'man'){
                return 'VALTIS (' + i + ') '
            }
        })}
    </div>
  )
}
