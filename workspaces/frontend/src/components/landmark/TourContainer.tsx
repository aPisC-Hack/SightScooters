import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";
import { useApiCall } from "../../hooks/useApiCall";
import MySpinner from "../MySpinner";
import ReactTagInput from "@pathofdev/react-tag-input";

type Props = {
  forSale: boolean;
  toursCallable: () => Promise<ITour[]>;
};

export default function TourContainer({ forSale, toursCallable }: Props) {
  const [tags, setTags] = React.useState<Array<string>>([]);
  const api = useApiCall(toursCallable);
  if (!api.value) return <MySpinner />;
  return (
    <Box>
      <ReactTagInput
        tags={tags}
        onChange={(newTags: Array<string>) => setTags(newTags)}
      />
      <VStack gap={1} padding={2} maxH="100%" w="100%">
        {api.value.map((tour, index) => {
          if (tags.find((tag) => tour.tags?.includes(tag))) {
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
          }
          if (tags.length == 0) {
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
          }
        })}
      </VStack>
    </Box>
  );
}
