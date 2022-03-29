import React from 'react';
import data from '../../data/data'

const Namas = (props) => {
    return (
        <div>
           {data.map(e=>{
               if (e.id % props.porinis === 0){
                   return e.name + ' '
               } else if (e.id % props.neporinis === 1){
                   return e.name + ' '
               }
           })}
        </div>
    );
}

export default Namas;
