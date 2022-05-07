import { Box, VStack, HStack, Image } from "@chakra-ui/react";

import { ITour } from "common";
type Props = {
  tour: ITour;
};

export default function GuideInfo({ tour }: Props) {
  return (
    <VStack alignItems="left">
      <HStack>
        <Box>
          <Image
            width="100%"
            height="100%"
            src={tour.guideImg}
            alt="tour guid image"
          />
        </Box>
        <Box>
          <Box>{"Guide's name: " + tour.guideName}</Box>
          <Box>{"Successful tours: " + tour.guideCompletedTours}</Box>
          <Box>{"Rating: " + tour.guideRating}</Box>
        </Box>
      </HStack>
    </VStack>
  );
}
