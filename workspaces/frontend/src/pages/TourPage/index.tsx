import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import MySpinner from "../../components/MySpinner";
import { Heading } from "@chakra-ui/react";
import TourLandmarkContainer from "../../components/landmark/TourLandmarkContainer";

type Props = {};

export default function TourPage({}: Props) {
  const { tourId } = useParams();
  const api = useApiCall(() => TourQuery.getOne(tourId));

  if (!api.value) return <MySpinner />;
  return <TourLandmarkContainer tour={api.value} />;
}
