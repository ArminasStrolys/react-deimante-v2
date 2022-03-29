import React from 'react';
import data from '../../data/data'

const Namas = (props) => {
    return (
        <div>
           {data.map((e)=>{
               if (e.id % props.porinis === 0 && e.type === 'man'){
                   return <span key={e.id} style={{backgroundColor:`${e.color}`}}>{e.name} ( {e.id} ) </span>
               } else if (e.id % props.neporinis === 1 && e.type === 'man'){
                return <span key={e.id} style={{backgroundColor:`${e.color}`, color:'white'}}>{e.name} ( {e.id} ) </span>
               }
           })}
        </div>
    );
}

export default Namas;


// e.name + ` (${e.id}) `;