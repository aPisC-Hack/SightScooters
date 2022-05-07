import { StarIcon } from "@chakra-ui/icons";
import { Box, IToast, Tag, VStack } from "@chakra-ui/react";
import React from "react";
import { ITour } from "../../../../../common/src/ITour";
import LandmarkPictureBox from "../LandmarkPictureBox";

type Props = { tour: ITour };

export default function TourInfo({ tour }: Props) {
  return (
    <VStack alignItems="start" gap={1} padding={2} maxH="100%" w="100%">
      <LandmarkPictureBox
        height="25vh"
        images={tour.landmarks.reduce<Array<string>>(
          (prev, landmark) => [...prev, ...landmark.pictures],
          []
        )}
      />
      <Box fontSize="2xl">{tour.name}</Box>
      <Box>
        <StarIcon />
        {" " + tour.rating}({tour.ratingCount})
      </Box>
      <Box>{tour.description}</Box>
      <Tag
        fontWeight="semibold"
        colorScheme={
          tour.time < 10 ? "green" : tour.time < 20 ? "orange" : "red"
        }
      >
        {tour.time} min
      </Tag>
    </VStack>
  );
}
