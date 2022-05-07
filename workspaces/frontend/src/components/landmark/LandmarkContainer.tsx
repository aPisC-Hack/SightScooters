import React, { useState } from "react";
import { Box, VStack, HStack, Button, Tag } from "@chakra-ui/react";
import { ITour } from "common";
import LandmarkPictureBox from "./LandmarkPictureBox";
import { StarIcon } from "@chakra-ui/icons";
import LandmarkBox from "./LandmarkBox";

type Props = {
  tour: ITour;
};

export default function LandmarkContainer({ tour }: Props) {
  const [view, setView] = useState(false);
  return (
    <Box>
      <HStack spacing={0} gap={0} width="100%" align="center" padding={2}>
        <Button
          width="100%"
          minH="16"
          height="100%"
          borderRadius={0}
          onClick={() => setView(true)}
        >
          Description
        </Button>
        <Button
          width="100%"
          minH="16"
          height="100%"
          borderRadius={0}
          onClick={() => setView(false)}
        >
          Landmarks
        </Button>
      </HStack>
      {view ? (
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
      ) : (
        <VStack gap={1} padding={2} maxH="100%" w="100%">
          {tour.landmarks.map((landmark, index) => {
            return (
              <LandmarkBox landmark={landmark} key={index} checkable={true} />
            );
          })}
        </VStack>
      )}
    </Box>
  );
}
