import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Map from "./components/map/Map";
import { IMarker } from "./components/map/IMarker";
import MapBox from "./components/map/MapBox";

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
      {/*<MapBox markers={demoMarkers} />*/}
      <LandmarkContainer />
    </Box>
  );
}

export default App;
