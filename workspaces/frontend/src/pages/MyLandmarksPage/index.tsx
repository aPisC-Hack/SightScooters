import React from "react";
import LandmarkList from "../../components/landmark/LandmarkList";
import { useApiCall } from "../../hooks/useApiCall";
import { LandmarkQuery } from "../../queries/landmark.query";

type Props = {};

export default function Index({}: Props) {
  const api = useApiCall(() => LandmarkQuery.getMyLandmarks());
  if (!api?.value) return null;
  return <LandmarkList landmarks={api.value} />;
}
