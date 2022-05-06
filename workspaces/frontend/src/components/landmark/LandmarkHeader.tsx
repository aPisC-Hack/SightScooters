import React from "react";
import { Box, HStack, Tag } from "@chakra-ui/react";
import { ILandmarkData } from "./ILandmarkData";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  landmarkData: ILandmarkData;
};

export default function LandmarkHeader({ landmarkData }: Props) {
  return (
    <Box w="100%">
      <HStack>
        <Box fontSize="xl">{landmarkData.name}</Box>
      </HStack>
      <HStack justifyContent="space-between">
        <Tag
          fontWeight="semibold"
          colorScheme={
            landmarkData.time < 10
              ? "green"
              : landmarkData.time < 20
              ? "orange"
              : "red"
          }
        >
          {landmarkData.time} perc
        </Tag>
        <HStack>
          <Box>
            <StarIcon />
            {" " + landmarkData.rating}
          </Box>
          <Box>({landmarkData.ratingCount})</Box>
        </HStack>
      </HStack>
    </Box>
  );
}
