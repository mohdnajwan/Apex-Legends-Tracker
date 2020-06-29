import React from "react";

const Lifetime = (props) => {
  // Set data
  const { platformUserHandle, avatarUrl } = props.data;
  const { kills, level, rankScore } = props.overview;

  return (
    <div className="lifetime-box">
      <div>
        <img className="profile-image" src={avatarUrl} alt="" />
        <p>{platformUserHandle}</p>
        <p>Level: {level.displayValue}</p>
        <p>Kills: {kills.displayValue}</p>
      </div>
      <div>
        <p>Rank: {rankScore?.metadata.rankName || "No information"}</p>
        <img className="rank-image" src={rankScore?.metadata.iconUrl || "No rank image"} alt="" />
        <p>MMR: {rankScore?.displayValue || "0"}</p>
      </div>
    </div>
  );
};

export default Lifetime;
