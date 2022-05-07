import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";

type Props = {};

export default function TourContainer({}: Props) {
  const api = useApiCall(() => TourQuery.getNear());

  if (!api.value) return null;
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
        {api.value.map((tour, index) => {
          return <TourBox tour={tour} key={index} />;
        })}
      </VStack>
    </Box>
  );
}
