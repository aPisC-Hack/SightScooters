import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Map from "./components/map/Map";
import { IMarker } from "./components/map/IMarker";
import MapBox from "./components/map/MapBox";
import {Landmark} from "common"

const test : Landmark = {
  address: "",
  coordinates: [0, 0],
  description: "", 
  id: "24185c1d-d9c3-4fe8-8102-3577447832f0",
  name: "",
  pictures: [],
  rating: 5
}

function App() {
  const demoMarkers: Array<IMarker> = [
    { longitude: 47.555963, latitude: 19.046605, content: "Content" },
    {
      longitude: 47.557852,
      latitude: 19.034627,
      content: "Some different content",
    },
  ];
  return (
    <Box height="100vh" width="100%">
      <MapBox /*markers={demoMarkers}*/ />
    </Box>
  );
}

export default App;
