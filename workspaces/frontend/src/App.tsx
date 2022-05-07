import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Map from "./components/map/Map";
import { IMarker } from "./components/map/IMarker";
import MapBox from "./components/map/MapBox";
import LandmarkContainer from "./components/landmark/LandmarkContainer";
import TourContainer from "./components/landmark/TourContainer";
import { useApiCall } from "./hooks/useApiCall";
import { TourQuery } from "./queries/tour.query";

function App() {
  const tourApi = useApiCall(() => TourQuery.getOne("id"));
  if (tourApi.value == null) {
    return null;
  }
  return (
    <Box height="100vh" width="100%">
      {/*<MapBox markers={demoMarkers} />*/}
      <TourContainer tours={[tourApi.value]} />
    </Box>
  );
}

export default App;
