import React from "react";
import data from "../../../data/data";

export default function Daiktas(props) {
  return (
    <>
      <div>
        {data.map((e) => {
          if (e.id % props.poriniai === 0) {
            return e.name + " ";
          } else if (e.id % props.neporiniai === 1) {
            return e.name + " ";
          }
          return ''
        })}
      </div>
    </>
  );
}
