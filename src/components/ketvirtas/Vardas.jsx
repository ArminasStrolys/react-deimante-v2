import React from 'react';
import data from '../../data/data'

const Vardas = () => {
    return (
        <div>
            {data.map((e,i)=>{
                if (e.color === 'yellow') {
                    return <span key={e.id} style={{backgroundColor:'yellow'}}> ({i}) {e.name} </span> 
                }
                return <span key={e.id} style={{color:`${e.color}`}}> ({i}) {e.name} </span> 
            })}
        </div>
    );
}

export default Vardas;
