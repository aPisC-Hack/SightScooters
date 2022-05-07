import React from "react";
import {
  Box,
  Center,
  IconButton,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ITour } from "common";
import { TourQuery } from "../../queries/tour.query";
import { useApiCall } from "../../hooks/useApiCall";
import { useNavigate } from "react-router-dom";

type Props = {
  tour: ITour;
  buyCallback: Function;
};

export default function BuyButton({ tour, buyCallback }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    TourQuery.saveAsMyTour(tour);
    onClose();
    buyCallback(tour.id);
  };
  const navigate = useNavigate();
  return (
    <>
      <Button size="sm" position="absolute" left={1} top={1} onClick={onOpen}>
        Request ($$$)
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton zIndex={999} />
          </ModalHeader>
          <ModalBody padding={2}>
            <VStack width="100%" p={8}>
              <Button onClick={() => navigate("/navigate/" + tour.id)}>
                Free ride ($$$)
              </Button>
              <Button onClick={handleClick}>Buy period ($$$)</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
