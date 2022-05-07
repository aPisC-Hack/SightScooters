import { ILandmark } from "common";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import { LandmarkQuery } from "../../queries/landmark.query";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  HStack,
} from "@chakra-ui/react";

import { useState } from "react";
import LandmarkList from "../../components/landmark/LandmarkList";
import CreateTourModal from "./CreateTourModal";

type Props = {};

export default function LandmarkPage({}: Props) {
  const api = useApiCall(() => LandmarkQuery.getNear());
  const [selectedPlaces, setSelectedPlaces] = useState<Array<string>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
  };
  if (!api.value) return null;
  return (
    <VStack height="100%" gap={1} marginBottom={20}>
      <LandmarkList
        checkable={true}
        checkedIds={selectedPlaces}
        onCheckedChange={(id, checked) => {
          if (checked) setSelectedPlaces((s) => [...s, id]);
          else setSelectedPlaces((s) => s.filter((x) => x !== id));
        }}
        landmarks={api.value}
      />
      <HStack
        p={4}
        bg="white"
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        justify="stretch"
      >
        <Button width="100%" disabled={!selectedPlaces.length} onClick={onOpen}>
          Continue
        </Button>
      </HStack>
      <CreateTourModal
        handleClose={handleClose}
        isOpen={isOpen}
        landmarks={api.value as ILandmark[]}
        selectedPlaces={selectedPlaces}
      />
    </VStack>
  );
}
