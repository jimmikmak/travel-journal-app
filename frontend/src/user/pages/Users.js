import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "JimmyMac",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
