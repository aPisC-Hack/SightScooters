import { Box, VStack, HStack, Image } from "@chakra-ui/react";

import { ITour } from "common";
type Props = {
  tour: ITour;
};

export default function GuideInfo({ tour }: Props) {
  return (
    <VStack alignItems="left">
      <HStack pt={2} align="flex-start">
        <Box>
          <Image width="30vmin" src={tour.guideImg} alt="tour guid image" />
        </Box>
        <Box pl={2}>
          <Box>
            <b>Guide's name: </b> {tour.guideName}
          </Box>
          <Box>
            <b>Successful tours: </b>
            {tour.guideCompletedTours}
          </Box>
          <Box>
            <b>Rating: </b>
            {tour.guideRating}
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
}
