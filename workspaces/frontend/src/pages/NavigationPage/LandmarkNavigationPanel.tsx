import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ILandmark } from "../../../../common/src/ILandmark";

type Props = { landmark: ILandmark };

export default function LandmarkNavigationPanel({ landmark }: Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      pos="absolute"
      top={0}
      left={0}
      zIndex={1600}
      right={0}
      bottom={isOpen ? 0 : undefined}
    >
      <VStack
        width="100%"
        justify="center"
        h={isOpen ? "100%" : undefined}
        zIndex={10}
        spacing={0}
      >
        <HStack align="flex-start" w="100%">
          <HStack
            p={2}
            borderBottomRadius={4}
            w={isOpen ? "100%" : undefined}
            bg="white"
          >
            <Text fontSize="lg" fontWeight="bold" onClick={onToggle}>
              {landmark.name}
              {!isOpen ? <ChevronRightIcon /> : null}
            </Text>
          </HStack>
        </HStack>
        <Box flex={1} bg="white" w="100%" h={isOpen ? undefined : "100%"}></Box>
      </VStack>
    </Box>
  );
}
