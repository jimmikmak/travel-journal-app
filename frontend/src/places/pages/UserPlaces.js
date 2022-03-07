import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Sydney Opera House",
    description: "One of the most famous opera house in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG",
    address: "Bennelong Point, Sydney NSW 2000",
    location: {
      lat: -33.8567844,
      lng: 151.2152967,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Sydney Opera House",
    description: "One of the most famous opera house in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG",
    address: "Bennelong Point, Sydney NSW 2000",
    location: {
      lat: -33.8567844,
      lng: 151.2152967,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
