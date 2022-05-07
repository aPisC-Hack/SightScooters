import { Link } from "react-router-dom";
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
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import LandmarkPictureBox from "./LandmarkPictureBox";
import LandmarkHeader from "./LandmarkHeader";
import { IoMapSharp } from "react-icons/io5";
import MapBox from "../map/MapBox";
import { ITour, ICoordinate } from "common";
import Map from "../map/Map";
import MapPath from "../map/MapPath";

type Props = {
  tour: ITour;
};

export default function TourBox({ tour }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => {
    onClose();
  };
  return (
    <Box position="relative" width="100%">
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
      <Link to={"/tour/" + tour.id}>
        <Box padding={3} bg="blue.100" borderRadius={4} width="100%">
          <VStack width="100%">
            <LandmarkPictureBox
              images={tour.landmarks.reduce<Array<string>>(
                (prev, landmark) => [...prev, ...landmark.pictures],
                []
              )}
            />
            <LandmarkHeader landmarkData={tour} />
          </VStack>
          <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
              <ModalBody padding={2}>
                <ModalCloseButton zIndex={999} />
                <Box height="80vh">
                  <Map>
                    {" "}
                    <MapPath
                      coords={tour.landmarks.reduce<Array<ICoordinate>>(
                        (prev, landmark) => [...prev, landmark.coordinate],
                        []
                      )}
                    />
                  </Map>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Link>
    </Box>
  );
}
