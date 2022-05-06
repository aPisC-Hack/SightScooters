import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import LandmarkBox from "./LandmarkBox";
import { ILandmarkBox } from "./ILandmarkBox";
import TestImage from "./test.jpg";

type Props = {};

export default function LandmarkContainer({}: Props) {
  const landmarks: Array<ILandmarkBox> = [
    {
      images: [
        TestImage,
        TestImage,
        TestImage,
        TestImage,
        TestImage,
        TestImage,
      ],
      landmarkData: {
        title: "Landmark title",
        rating: 4.2,
        distance: 21,
        ratingCount: 666,
        time: 45,
      },
    },
    {
      images: [TestImage, TestImage, TestImage],
      landmarkData: {
        title: "Landmark title",
        rating: 4.2,
        distance: 12,
        ratingCount: 666,
        time: 45,
      },
    },
    {
      images: [TestImage, TestImage, TestImage, TestImage],
      landmarkData: {
        title: "Landmark title",
        rating: 4.2,
        distance: 42,
        ratingCount: 666,
        time: 45,
      },
    },
    {
      images: [TestImage, TestImage, TestImage, TestImage],
      landmarkData: {
        title: "Landmark title",
        rating: 4.2,
        distance: 21,
        ratingCount: 666,
        time: 45,
      },
    },
    {
      images: [TestImage, TestImage, TestImage, TestImage],
      landmarkData: {
        title: "Landmark title",
        rating: 4.2,
        distance: 3,
        ratingCount: 666,
        time: 45,
      },
    },
  ];
  return (
    <Box>
      <VStack
        gap={1}
        padding={2}
        maxH="100%"
        w="100%"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "blue",
            borderRadius: "24px",
          },
        }}
      >
        {landmarks.map((landmark, index) => {
          return <LandmarkBox landmark={landmark} key={index} />;
        })}
      </VStack>
    </Box>
  );
}
