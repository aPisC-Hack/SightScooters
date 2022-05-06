import React from "react";
import {
  Box,
  Button,
  IconButton,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { IoMapSharp } from "react-icons/io5";
import { ILandmark } from "../../../../common/src/ILandmark";
import MapBox from "../map/MapBox";

type Props = {
  landmark: ILandmark;
};

export default function LandmarkBox({ landmark }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
  };
  return (
    <Box padding={3} bg="blue.100" borderRadius={4} position="relative">
      <IconButton
        aria-label="Show map"
        icon={<IoMapSharp />}
        position="absolute"
        right={0}
        top={0}
        margin={1}
        colorScheme="gray"
        padding={2}
        fontSize="xl"
        borderRadius="50%"
        onClick={onOpen}
      />
      <VStack width="100%">
        <LandmarkPictureBox images={landmark.pictures} />
        <LandmarkHeader landmarkData={landmark} />
      </VStack>
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={2}>
            <ModalCloseButton zIndex={999} />
            <Box height="80vh">
              <MapBox />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
