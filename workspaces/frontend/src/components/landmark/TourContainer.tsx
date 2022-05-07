import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import TourBox from "./TourBox";
import { useApiCall } from "../../hooks/useApiCall";
import MySpinner from "../MySpinner";
import ReactTagInput from "@pathofdev/react-tag-input";
import { motion, AnimatePresence } from "framer-motion";
import ScaleFadeAnimation from "../animations/ScaleFadeAnimation";

type Props = {
  forSale: boolean;
  toursCallable: () => Promise<ITour[]>;
};

export default function TourContainer({ forSale, toursCallable }: Props) {
  const [tags, setTags] = React.useState<Array<string>>([]);
  const api = useApiCall(toursCallable);
  if (!api.value) return <MySpinner />;

  const tours: ITour[] = api.value;

  return (
    <VStack gap={1} maxH="100%" w="100%">
      <ReactTagInput
        placeholder="Filter tours"
        tags={tags}
        onChange={(newTags: Array<string>) => setTags(newTags)}
      />
      {tours
        .filter(
          (tour) =>
            tags.length == 0 || tags.find((tag) => tour.tags.includes(tag))
        )
        .map((tour) => (
          <ScaleFadeAnimation key={tour.id}>
            <TourBox
              removeCallback={(id: string) =>
                api.update(api.value?.filter((item) => item.id !== id))
              }
              forSale={forSale}
              tour={tour}
            />
          </ScaleFadeAnimation>
        ))}
    </VStack>
  );
}
