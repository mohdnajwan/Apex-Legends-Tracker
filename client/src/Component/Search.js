import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Search.css";
import Logo from "../Asset/logo.png";

const Search = () => {
  // Initialize State
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("origin");

  // Update username everytime according changes to text form
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  // Update platfrom value according changes to option button
  const updatePlatform = (e) => {
    setPlatform(e.target.value);
    console.log(platform);
  };

  return (
    <div className="background-image">
      <div>
        <img className="image-logo" src={Logo} alt="" />
      </div>
      <div className="search-box">
        <div>
          <input
            className="search-input"
            type="text"
            value={username}
            onChange={updateUsername}
            placeholder="Enter IGN"
          />
        </div>
        <div>
          <select className="search-select" onChange={updatePlatform}>
            <option value="origin">Origin</option>
            <option value="psn">PS4</option>
            <option value="xbox">XBOX</option>
          </select>
        </div>
        <Link to={`/api/profile/${platform}/${username}`}>
          <button className="search-submit">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
