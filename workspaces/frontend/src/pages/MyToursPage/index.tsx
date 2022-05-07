import TourContainer from "../../components/landmark/TourContainer";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import { Heading } from "@chakra-ui/react";

type Props = {};

export default function Index({}: Props) {
  const api = useApiCall(() => TourQuery.getMyTours());
  if (!api?.value) return null;
  return (
    <>
      <Heading>Your tours</Heading>
      <TourContainer
        forSale={false}
        toursCallable={() => TourQuery.getMyTours()}
      />
    </>
  );
}
