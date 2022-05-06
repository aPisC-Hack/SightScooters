import React from "react";
import { Box, VStack, Tag } from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { IoMapSharp } from "react-icons/io5";
import { ILandmarkData } from "./ILandmarkData";

type Props = {
  landmark: ILandmarkData;
};

export default function LandmarkBox({ landmark }: Props) {
  return (
    <Box padding={2} bg="blue.100" borderRadius={4} position="relative">
      <Tag
        position="absolute"
        right={2}
        top={2}
        margin={1}
        colorScheme="green"
        padding={2}
        fontSize="xl"
        borderRadius="50%"
      >
        <IoMapSharp />
      </Tag>
      <VStack width="100%">
        <LandmarkPictureBox images={landmark.pictures} />
        <LandmarkHeader landmarkData={landmark} />
      </VStack>
    </Box>
  );
}
