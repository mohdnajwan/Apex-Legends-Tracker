import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lifetime from "./Component/Lifetime";
import LegendPage from "./Component/Legends";
import CircleLoading from "./Component/CircleLoading";
import ErrorMessage from "./Component/ErrorMsg";
import "./Profile.css";

const Profile = () => {
  const { platform, username } = useParams();

  // State Initialize
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({});
  const [summary, setSummary] = useState({
    kills: {},
    level: {},
    rankScore: {
      metadata: {},
    },
  });
  const [legends, setLegends] = useState([
    {
      stats: {
        kills: {
          displayValue: "",
        },
        seasonWins: {},
        season2Wins: {},
        season3Wins: {},
        season4Wins: {},
      },
    },
  ]);

  // Use Effect to fecth data
  useEffect(() => {
    getProfile();
  }, []);

  // Fetch Data
  const getProfile = async () => {
    // Try to fetch
    try {
      const response = await fetch(
        `/api/${platform}/${username}`
      );
      const data = await response.json();
      console.log(data);
      if (data.errors) {
        setErrorMsg(data.errors[0].message);
        setError(true);
      } else {
        setLegends(data.data.segments);
        setProfile(data.data.platformInfo);
        setSummary(data.data.segments[0].stats);
      }
      setLoading(false);
    } catch (error) {
      //If there is error
      setLoading(false);
      setErrorMsg("Server Error, failed to fetch data");
      setError(true);
    }
  };

  return (
    <div className="center">
      {loading ? (
        <CircleLoading />
      ) : error ? (
        <ErrorMessage data={errorMsg} />
      ) : (
        <div>
          <h2>Profile</h2>
          <div className="lifetime-stats">
            <Lifetime data={profile} overview={summary} />
          </div>
          <div>
            <LegendPage legend={legends} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
