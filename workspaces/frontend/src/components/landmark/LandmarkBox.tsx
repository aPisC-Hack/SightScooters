import React, { PropsWithChildren } from "react";
import { Box, VStack } from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { ILandmark } from "common";

type Props = {
  landmark: ILandmark;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export default function LandmarkBox({
  landmark,
  checked,
  onCheckedChange,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box
      padding={3}
      bg="blue.100"
      borderRadius={4}
      position="relative"
      width="100%"
    >
      <VStack width="100%" onClick={() => onCheckedChange?.(!checked)}>
        <LandmarkPictureBox images={landmark.pictures} />
        <LandmarkHeader landmarkData={landmark} />
      </VStack>
      {children}
    </Box>
  );
}
