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
  HStack,
} from "@chakra-ui/react";
import { ITour } from "common";
import { TourQuery } from "../../queries/tour.query";
import { useApiCall } from "../../hooks/useApiCall";
import { useNavigate } from "react-router-dom";
import { IoBasket } from "react-icons/io5";
import { MdElectricScooter } from "react-icons/md";

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
      <IconButton
        aria-label="Buy tour"
        icon={<IoBasket />}
        colorScheme="gray"
        padding={2}
        fontSize="xl"
        borderRadius="50%"
        onClick={onOpen}
        shadow="lg"
      />

      <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>Buy tour</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center fontSize={128} p={4}>
              <MdElectricScooter />
            </Center>
            <HStack p={0} justify="space-between">
              <Button onClick={() => navigate(`/navigate/${tour.id}`)}>
                Free Ride
              </Button>
              <Button onClick={handleClick}>Buy tour ({tour.price} $)</Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
/* <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton zIndex={999} />
          </ModalHeader>
          <ModalBody maxW={32} pos="relative">
            <HStack width="100%" justify="space-between">
              <Button onClick={() => navigate("/navigate/" + tour.id)}>
                Free ride ($$$)
              </Button>
              <Button onClick={handleClick}>Buy period ($$$)</Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal> */
