import React, { useState } from "react";
import Legend from "./Legend";

const Legends = (props) => {
  // Fecth list of legends
  const legend = props.legend
    .filter((leg) => {
      if (leg.type == "legend") {
        return leg;
      }
    })
    .map((obj) => {
      return obj;
    });

  return (
    <div>
      <h2>List of Legends</h2>
      {legend.map((obj) => {
        console.log(obj);
        return (
          <Legend
            name={obj.metadata?.name}
            img={obj.metadata?.imageUrl}
            kill={obj.stats?.kills?.displayValue}
            season1Win={obj.stats?.seasonWins?.displayValue}
            season2Win={obj.stats?.season2Wins?.displayValue}
            season3Win={obj.stats?.season3Wins?.displayValue}
            season4Win={obj.stats?.season4Wins?.displayValue}
          />
        );
      })}
    </div>
  );
};

export default Legends;
