import { VStack } from "@chakra-ui/react";
import React from "react";
import { ILandmark } from "../../../../../common/src/ILandmark";
import EmptyPage from "../../EmptyPage";
import LandmarkList from "../LandmarkList";

type Props = {
  landmarks: ILandmark[];
};

export default function LandmarksView({ landmarks }: Props) {
  if (landmarks == []) {
    return <EmptyPage text="Wow, you have seen everything!" />;
  }
  return (
    <VStack gap={1} width="100%">
      <LandmarkList buyable={true} landmarks={landmarks} />
    </VStack>
  );
}
