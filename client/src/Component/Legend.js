import React from "react";


// Return each legends stats
const Legend = ({
  name,
  img,
  kill,
  seasonWin,
  season2Win,
  season3Win,
  season4Win,
}) => {
  return (
    <div className="legend-justify legends-box">
      <div>
        <img className="legend-image" src={img} alt="" />
      </div>
      <div className="legends-stats">
        <div>
          <h3 className="legend-name">{name}</h3>
        </div>

        <span>Kills: {kill || 0}</span>
        {seasonWin ? <p>Season 1 Wins: {seasonWin}</p> : null}
        {season2Win ? <p>Season 2 Wins: {season2Win}</p> : null}
        {season3Win ? <p>Season 3 Wins: {season3Win}</p> : null}
        {season4Win ? <p>Season 4 Wins: {season4Win}</p> : null}
      </div>
    </div>
  );
};

export default Legend;
