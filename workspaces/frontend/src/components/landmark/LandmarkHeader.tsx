import React from "react";
import { Box, HStack, Tag, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ILandmark, ITour } from "common";

type Props = {
  landmarkData: ILandmark | ITour;
};

export default function LandmarkHeader({ landmarkData }: Props) {
  return (
    <Box w="100%">
      <HStack>
        <Box fontSize="xl">{landmarkData.name}</Box>
      </HStack>
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
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
            {landmarkData.time} min
          </Tag>
          <HStack wrap="wrap">
            {landmarkData.tags &&
              landmarkData.tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>;
              })}
          </HStack>
        </VStack>
        <HStack align="flex-end">
          <Box>
            <Box>
              <StarIcon />
              {" " + landmarkData.rating}
            </Box>
            <Box>({landmarkData.ratingCount})</Box>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}
