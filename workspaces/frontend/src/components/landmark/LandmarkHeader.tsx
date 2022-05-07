import React from "react";
import { Box, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ILandmark, ITour } from "common";

type Props = {
  landmarkData: ILandmark | ITour;
};

export default function LandmarkHeader({ landmarkData }: Props) {
  return (
    <VStack w="100%" align="stretch">
      <Text fontSize="xl" fontWeight="bold">
        {landmarkData.name}
      </Text>
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
          <Tag
            fontWeight="semibold"
            colorScheme={landmarkTimeColor(landmarkData.time)}
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
    </VStack>
  );
}

function landmarkTimeColor(time: number) {
  if (time < 10) return "green";
  if (time < 20) return "orange";
  return "red";
}
