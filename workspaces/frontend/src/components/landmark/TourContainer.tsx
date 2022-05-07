import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";

type Props = {
  tours: Array<ITour>;
};

export default function TourContainer({ tours }: Props) {
  return (
    <Box>
      <VStack
        gap={1}
        padding={2}
        maxH="100%"
        w="100%"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "blue",
            borderRadius: "24px",
          },
        }}
      >
        {tours.map((tour, index) => {
          return <TourBox tour={tour} key={index} />;
        })}
      </VStack>
    </Box>
  );
}
