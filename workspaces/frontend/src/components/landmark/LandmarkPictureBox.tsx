import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";

type Props = {
  images: Array<string>;
  height?: string;
};

export default function LandmarkPictureBox({ images, height = "15vh" }: Props) {
  return (
    <Box>
      <HStack gap={0} spacing={0} display="-webkit-box" overflowX="scroll">
        {images.map((image, index) => {
          return (
            <Box h={height} key={index}>
              <Image h="100%" w="auto" src={image} key={index} />
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
}
