import { ILandmark } from "common";
import { VStack } from "@chakra-ui/react";
import React from "react";
import LandmarkBox from "./LandmarkBox";

type Props = {
  landmarks: Array<ILandmark>;
  onCheckedChange?: (landmarkId: string, checked: boolean) => void;
  checkedIds?: string[];
};

export default function LandmarkList({
  landmarks,
  onCheckedChange,
  checkedIds,
}: Props) {
  console.log(checkedIds);
  return (
    <VStack gap={1} padding={2} maxH="100%" w="100%" overflowY="scroll">
      {landmarks.map((landmark, index) => {
        return (
          <LandmarkBox
            landmark={landmark}
            key={index}
            checkable={!!onCheckedChange}
            checked={!!checkedIds?.includes(landmark.id)}
            onCheckedChange={(checked) =>
              onCheckedChange?.(landmark.id, checked)
            }
          />
        );
      })}
    </VStack>
  );
}
