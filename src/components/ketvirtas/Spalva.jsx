import React from 'react';
import data from '../../data/data'

const Spalva = () => {
    return (
        <div>
            {data.map((e,i)=>{
                if (e.color === 'yellow') {
                    return <span key={e.id} style={{backgroundColor:'yellow'}}> ({i}) {e.color} </span> 
                }
                return <span key={e.id} style={{color:`${e.color}`}}> ({i}) {e.color} </span> 
            })}
        </div>
    );
}

export default Spalva;
