import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ILandmark } from "../../../../common/src/ILandmark";
import LandmarkHeader from "../../components/landmark/LandmarkHeader";
import LandmarkPictureBox from "../../components/landmark/LandmarkPictureBox";

type Props = { landmark: ILandmark };

export default function LandmarkNavigationPanel({ landmark }: Props) {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box pos="absolute" top={0} left={0} bottom={isOpen ? 0 : undefined}>
      <HStack
        p={2}
        borderBottomRadius={4}
        w={isOpen ? "100%" : undefined}
        bg="white"
      >
        <Text fontSize="lg" fontWeight="bold" onClick={onToggle}>
          {landmark.name}
          <ChevronRightIcon />
        </Text>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90vw" mt={4}>
          <ModalHeader>{landmark.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height="80vh">
            <LandmarkPictureBox images={landmark.pictures} height="60vmin" />
            <Text mt={2} textAlign="justify">
              {landmark.description}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
