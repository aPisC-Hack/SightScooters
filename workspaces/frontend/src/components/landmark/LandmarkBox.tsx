import React, { PropsWithChildren } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { ILandmark } from "common";
import ScaleFadeAnimation from "../animations/ScaleFadeAnimation";

type Props = {
  landmark: ILandmark;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  leftChildren?: React.ReactNode;
  onClick?: () => void;
};

export default function LandmarkBox({
  landmark,
  checked,
  onCheckedChange,
  children,
  onClick,
  leftChildren = null,
}: PropsWithChildren<Props>) {
  return (
    <ScaleFadeAnimation>
      <Box
        padding={3}
        bg="cyan.100"
        borderRadius={4}
        position="relative"
        width="100%"
        onClick={onClick}
      >
        <VStack width="100%" onClick={() => onCheckedChange?.(!checked)}>
          <LandmarkPictureBox images={landmark.pictures} height="30vmin" />
          <LandmarkHeader landmarkData={landmark} />
        </VStack>
        <HStack pos={"absolute"} top={0} left={0}>
          {leftChildren}
        </HStack>
        <HStack pos={"absolute"} top={1} right={1}>
          {children}
        </HStack>
      </Box>
    </ScaleFadeAnimation>
  );
}
