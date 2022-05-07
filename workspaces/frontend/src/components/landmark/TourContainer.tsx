import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import { appendFile } from "fs";

type Props = {
  forSale: boolean;
  toursCallable: () => Promise<ITour[]>;
};

export default function TourContainer({ forSale, toursCallable }: Props) {
  const api = useApiCall(toursCallable);
  if (!api?.value) return null;
  return (
    <Box>
      <VStack gap={1} padding={2} maxH="100%" w="100%">
        {api.value.map((tour, index) => {
          return (
            <TourBox
              removeCallback={(id: string) =>
                api.update(api.value?.filter((item) => item.id !== id))
              }
              forSale={forSale}
              tour={tour}
              key={index}
            />
          );
        })}
      </VStack>
    </Box>
  );
}
