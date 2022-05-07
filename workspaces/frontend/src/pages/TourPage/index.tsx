import React, { useEffect, useState } from "react";
import { ITour } from "common";
import TourLandmarkContainer from "../../components/landmark/TourLandmarkContainer";
import { useParams } from "react-router-dom";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";

type Props = {};

export default function TourPage({}: Props) {
  const { tourId } = useParams();
  const api = useApiCall(() => TourQuery.getOne(tourId));
  if (!api.value) return null;
  return <TourLandmarkContainer tour={api.value} />;
}
