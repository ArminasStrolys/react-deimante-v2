import React from 'react';
import data from '../../data/data'

const Spalva = () => {
    return (
        <div>
            {data.map((e,i)=>{
                return ` (${i} `+ e.color + ') '
            })}
        </div>
    );
}

export default Spalva;
