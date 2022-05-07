import React from "react";
import TourContainer from "../../components/landmark/TourContainer";
import TourLandmarkContainer from "../../components/landmark/TourLandmarkContainer";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";

type Props = {};

export default function Index({}: Props) {
  const api = useApiCall(() => TourQuery.getMyTours());
  if (!api?.value) return null;
  return (
    <TourContainer
      forSale={false}
      toursCallable={() => TourQuery.getMyTours()}
    />
  );
}
