import React from "react";
import {
  Box,
  Button,
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
import { IoMapSharp } from "react-icons/io5";
import { ICoordinate } from "common";
import Map from "../map/Map";
import MapPointSource from "../map/MapPointSource";
type Props = {
  coordinate: ICoordinate;
  address: string;
};

export default function MapIconButton({ coordinate, address }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <IconButton
        aria-label="Show map"
        icon={<IoMapSharp />}
        colorScheme="gray"
        padding={2}
        fontSize="xl"
        borderRadius="50%"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={2}>
            <ModalCloseButton zIndex={999} />
            <Box height="80vh">
              <Map>
                <MapPointSource coordinate={coordinate} address={address} />
              </Map>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
