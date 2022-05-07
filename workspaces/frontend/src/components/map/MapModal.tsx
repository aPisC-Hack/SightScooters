import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Map from "./Map";
import MapPath from "./MapPath";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export default function MapModal({
  isOpen,
  handleClose,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding={2}>
          <ModalCloseButton
            zIndex={999}
            bg="cyan.200"
            _hover={{ bg: "cyan.100" }}
          />
          <Box height="80vh">{isOpen && <Map>{children}</Map>}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
