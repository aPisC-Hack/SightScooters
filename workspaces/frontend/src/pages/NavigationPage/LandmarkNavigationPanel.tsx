import { Box } from "@chakra-ui/react";
import React from "react";
import { ILandmark } from "../../../../common/src/ILandmark";

type Props = { landmark: ILandmark };

export default function LandmarkNavigationPanel({}: Props) {
  return <Box p={8} bg="white" zIndex={1000}></Box>;
}
