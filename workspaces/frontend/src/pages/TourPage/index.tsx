import React, { useEffect, useState } from "react";
import { ITour } from "common";
import LandmarkContainer from "../../components/landmark/LandmarkContainer";
import { useParams } from "react-router-dom";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";

type Props = {};

export default function TourPage({}: Props) {
  const { tourId } = useParams();
  const api = useApiCall(() => TourQuery.getOne(tourId));
  if (!api.value) return null;
  return <LandmarkContainer tour={api.value} />;
}
