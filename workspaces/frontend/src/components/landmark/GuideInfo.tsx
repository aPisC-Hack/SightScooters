import { Box, VStack } from "@chakra-ui/react";

import { ITour } from "common";
type Props = {
  tour: ITour;
};

export default function GuideInfo({ tour }: Props) {
  return (
    <VStack alignItems="left">
      <Box>{"Guide's name: " + tour.guideName}</Box>
      <Box>{"Successful tours: " + tour.guideCompletedTours}</Box>
      <Box>{"Rating: " + tour.guideRating}</Box>
    </VStack>
  );
}
