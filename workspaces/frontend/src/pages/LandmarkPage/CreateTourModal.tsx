import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILandmark } from "../../../../common/src/ILandmark";
import { TourQuery } from "../../queries/tour.query";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  landmarks: ILandmark[];
  selectedPlaces: string[];
};

interface IFormData {
  name: string;
  description: string;
}

export default function CreateTourModal({
  isOpen,
  landmarks,
  handleClose,
  selectedPlaces,
}: Props) {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding={2}>
          <ModalCloseButton zIndex={999} />
          <Box>
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
                price:
                  landmarks
                    .filter((landmark) => selectedPlaces.includes(landmark.id))
                    .reduce((prev, current) => (prev += current.time), 0) * 100,
                isGuided: false,
                tags: [],
                description: formData.description,
                id: "",
                landmarks: landmarks.filter((landmark) =>
                  selectedPlaces.includes(landmark.id)
                ),
                name: formData.name,
                rating: 0,
                ratingCount: 0,
                time: landmarks
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
  );
}
