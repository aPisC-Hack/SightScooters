import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import MySpinner from "../MySpinner";

type Props = {};

export default function TourContainer({}: Props) {
  const api = useApiCall(() => TourQuery.getNear());
  if (!api.value) return <MySpinner />;
  return (
    <Box>
      <VStack gap={1} padding={2} w="100%" align="stretch">
        {api.value.map((tour, index) => {
          return <TourBox tour={tour} key={index} />;
        })}
      </VStack>
    </Box>
  );
}
