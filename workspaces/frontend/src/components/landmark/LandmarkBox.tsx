import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { ILandmarkBox } from "./ILandmarkBox";

type Props = {
  landmark: ILandmarkBox;
};

export default function LandmarkBox({ landmark }: Props) {
  return (
    <Box padding={2} bg="blue.100" borderRadius={4}>
      <VStack width="100%">
        <LandmarkPictureBox images={landmark.images} />
        <LandmarkHeader landmarkData={landmark.landmarkData} />
      </VStack>
    </Box>
  );
}
