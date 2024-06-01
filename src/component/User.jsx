import React from "react";
import "./styles.css";

const User = ({ userData }) => {
  const { avatar_url, login, created_at, public_repos, follwers, location } =
    userData;

  const createdDate = new Date(created_at);
  console.log(createdDate);
  return (
    <div className="profile--container">
      <img src={avatar_url} alt="profile picture of user" />
      <h1>
        <a href={`https://github.com/${login}`} target="_blank">
          {login}
        </a>
      </h1>
      <h3>
        <span> Profile Created on: </span>
        {`${createdDate.getDate()} ${createdDate.toLocaleString("en-US", {
          month: "short",
        })} ${createdDate.getFullYear()}`}
      </h3>
      <h3>
        <span>Public Repos:</span> {public_repos}
      </h3>
      <h3>
        <span>Followers:</span> {follwers}
      </h3>
      <h3>
        <span>Location: </span>
        {location}
      </h3>
    </div>
  );
};

export default User;
