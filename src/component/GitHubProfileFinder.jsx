import React, { useState, useEffect } from "react";
import "./styles.css";
import User from "./User";

const GitHubProfileFinder = () => {
  const [inputData, setInputData] = useState("saadialakhany");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${inputData}`);
    const data = await response.json();
    console.log(data);
    if (data) {
      setProfileData(data);
      setLoading(false);
      setInputData("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h1>Data is loading. Please wait!</h1>;

  return (
    <div className="container">
      <h1>GitHub Profile Finder</h1>
      <div className="main">
        <input
          type="text"
          placeholder="Enter Profile Name Here"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        ></input>
        <button onClick={handleSubmit} className="search-btn">
          Search
        </button>
      </div>
      {profileData !== null ? <User userData={profileData} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
