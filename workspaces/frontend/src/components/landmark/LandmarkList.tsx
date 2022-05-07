import { ILandmark } from "common";
import { VStack } from "@chakra-ui/react";
import React from "react";
import LandmarkBox from "./LandmarkBox";

type Props = {
  landmarks: Array<ILandmark>;
  checkable?: boolean;
  setSelectedPlacesCallback?: Function;
  setDeselectedPlacesCallback?: Function;
};

export default function LandmarkList({
  landmarks,
  setSelectedPlacesCallback,
  setDeselectedPlacesCallback,
  checkable = true,
}: Props) {
  return (
    <VStack gap={1} padding={2} maxH="100%" w="100%" overflowY="scroll">
      {landmarks.map((landmark, index) => {
        return (
          <LandmarkBox
            landmark={landmark}
            key={index}
            checkable={checkable}
            setSelectedPlacesCallback={setSelectedPlacesCallback}
            setDeselectedPlacesCallback={setDeselectedPlacesCallback}
          />
        );
      })}
    </VStack>
  );
}
