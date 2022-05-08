import { StarIcon } from "@chakra-ui/icons";
import { Box, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ITour } from "../../../../../common/src/ITour";
import ScaleFadeAnimation from "../../animations/ScaleFadeAnimation";
import GuideInfo from "../GuideInfo";
import LandmarkPictureBox from "../LandmarkPictureBox";
import ShowcaseTags from "../ShowcaseTags";

type Props = { tour: ITour };

export default function TourInfo({ tour }: Props) {
  return (
    <VStack alignItems="start" gap={1} padding={2} maxH="100%" w="100%">
      <ScaleFadeAnimation>
        <LandmarkPictureBox
          height="25vh"
          images={tour.landmarks.reduce<Array<string>>(
            (prev, landmark) => [...prev, ...landmark.pictures],
            []
          )}
        />
      </ScaleFadeAnimation>
      <Box fontSize="2xl">{tour.name}</Box>
      <Box>
        <StarIcon />
        {" " + tour.rating}({tour.ratingCount})
      </Box>
      <Text textAlign="justify">{tour.description}</Text>
      {tour.isGuided && <GuideInfo tour={tour} />}
      <Tag
        fontWeight="semibold"
        colorScheme={
          tour.time < 10 ? "green" : tour.time < 20 ? "orange" : "red"
        }
      >
        {tour.time} min
      </Tag>
      <ShowcaseTags data={tour} />
    </VStack>
  );
}
