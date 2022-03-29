import React from 'react';
import data from "../../data/data"

const Tipas = () => {
    return (
        <div>
            {data.map((e,i)=>{
                console.log(e.type)
                return ` (${i} `+ e.type + ') '
            })}
        </div>
    );
}

export default Tipas;
