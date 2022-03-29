import React from "react";
import data from "../../../data/data";

export default function Daiktas(props) {
  return (
    <>
      <div>
        {data.map((e) => {
          if (e.color === 'yellow' && e.id % props.poriniai === 0){
            return <span key={e.id} style={{backgroundColor:'yellow'}}> {e.name} ({e.id}) </span>
          }
          if (e.id % props.poriniai === 0) {
            return <span key={e.id} style={{color:`${e.color}`}}> {e.name} ({e.id}) </span>
          } else if (e.id % props.neporiniai === 1) {
            return <span key={e.id} style={{color:`${e.color}`}}> {e.name} ({e.id}) </span>
          }
          return ''
        })}
      </div>
    </>
  );
}
