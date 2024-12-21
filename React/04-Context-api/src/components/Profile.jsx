import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Login please</div>;
  else return <div>welcome {user}</div>;
};

export default Profile;
