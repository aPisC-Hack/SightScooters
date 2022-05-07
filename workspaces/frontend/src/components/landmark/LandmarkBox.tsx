import React from "react";
import {
  Box,
  IconButton,
  Checkbox,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { IoMapSharp } from "react-icons/io5";
import { ILandmark } from "common";
import Map from "../map/Map";
import MapPointSource from "../map/MapPointSource";

type Props = {
  landmark: ILandmark;
  checkable: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export default function LandmarkBox({
  landmark,
  checkable,
  checked,
  onCheckedChange,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
  };
  return (
    <Box
      padding={3}
      bg="blue.100"
      borderRadius={4}
      position="relative"
      width="100%"
    >
      {checkable && (
        <Checkbox
          position="absolute"
          padding={2}
          borderRadius={4}
          opacity={1}
          bg="blue.100"
          left={0}
          top={0}
          size="lg"
          colorScheme="gray"
          isChecked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
        />
      )}
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
      <VStack width="100%" onClick={() => onCheckedChange?.(!checked)}>
        <LandmarkPictureBox images={landmark.pictures} />
        <LandmarkHeader landmarkData={landmark} />
      </VStack>
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={2}>
            <ModalCloseButton zIndex={999} />
            <Box height="80vh">
              <Map>
                <MapPointSource
                  coordinate={landmark.coordinate}
                  address={landmark.address}
                />
              </Map>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
