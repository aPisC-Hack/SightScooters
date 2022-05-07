import { ILandmark } from "common";
import React from "react";
import LandmarkList from "./LandmarkList";
import { Box } from "@chakra-ui/react";

type Props = {
  landmarks: Array<ILandmark>;
  setSelectedPlacesCallback: Function;
  setDeselectedPlacesCallback: Function;
};

export default function SimpleLandmarkContainer({
  landmarks,
  setSelectedPlacesCallback,
  setDeselectedPlacesCallback,
}: Props) {
  return (
    <Box flex={1}>
      <LandmarkList landmarks={landmarks} />
    </Box>
  );
}
