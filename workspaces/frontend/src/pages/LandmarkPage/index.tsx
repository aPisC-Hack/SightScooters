import { ILandmark, ITour } from "common";
import SimpleLandmarkContainer from "../../components/landmark/SimpleLandmarkContainer";
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
} from "@chakra-ui/react";

import { useState } from "react";

interface IFormData {
  name: string;
  description: string;
}

type Props = {};

export default function LandmarkPage({}: Props) {
  const navigate = useNavigate();
  const api = useApiCall(() => LandmarkQuery.getNear());
  const [selectedPlaces, setSelectedPlaces] = useState<Array<string>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    description: "",
  });
  const handleClose = () => {
    onClose();
  };
  if (!api.value) return null;
  return (
    <>
      <VStack height="100%">
        <SimpleLandmarkContainer
          setSelectedPlacesCallback={(id: string) =>
            setSelectedPlaces([...selectedPlaces, id])
          }
          setDeselectedPlacesCallback={(id: string) =>
            setSelectedPlaces(selectedPlaces.filter((item) => item !== id))
          }
          landmarks={api.value}
        />
        <Button disabled={selectedPlaces == []} onClick={onOpen}>
          Continue
        </Button>
      </VStack>
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={2}>
            <ModalCloseButton zIndex={999} />
            <Box height="80vh">
              <FormControl isRequired>
                <FormLabel>Tour name:</FormLabel>
                <Input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description:</FormLabel>
                <Textarea
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={async () => {
                const tour = await TourQuery.uploadCustomTour({
                  description: formData.description,
                  id: "",
                  landmarks: (api.value as Array<ILandmark>).filter(
                    (landmark) => selectedPlaces.includes(landmark.id)
                  ),
                  name: formData.name,
                  rating: 0,
                  ratingCount: 0,
                  time: (api.value as Array<ILandmark>)
                    .filter((landmark) => selectedPlaces.includes(landmark.id))
                    .reduce((prev, current) => (prev += current.time), 0),
                });
                navigate("/tours");
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
