import React from "react";
import { ILandmark } from "../../../../../common/src/ILandmark";
import LandmarkList from "../LandmarkList";

type Props = { landmarks: ILandmark[] };

export default function LandmarksView({ landmarks }: Props) {
  return <LandmarkList landmarks={landmarks} />;
}
