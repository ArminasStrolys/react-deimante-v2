import React from 'react';
import data from '../../data/data'

const Vardas = () => {
    return (
        <div>
            {data.map((e,i)=>{
                return ` (${i} `+ e.name + ') '
            })}
        </div>
    );
}

export default Vardas;
