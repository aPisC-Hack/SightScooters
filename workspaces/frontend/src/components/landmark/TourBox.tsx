import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
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
import { ITour, ICoordinate } from "common";
import Map from "../map/Map";
import MapPath from "../map/MapPath";
import BuyButton from "./BuyButton";
import MapModal from "../map/MapModal";
import GuideInfo from "./GuideInfo";

type Props = {
  tour: ITour;
  forSale: boolean;
  removeCallback: Function;
};

export default function TourBox({ tour, forSale, removeCallback }: Props) {
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
      {forSale && (
        <BuyButton buyCallback={() => removeCallback(tour.id)} tour={tour} />
      )}
      <Link to={"/tour/" + tour.id}>
        <Box padding={3} bg="cyan.100" borderRadius={4} width="100%">
          <VStack width="100%">
            <LandmarkPictureBox
              images={tour.landmarks.reduce<Array<string>>(
                (prev, landmark) => [...prev, ...landmark.pictures],
                []
              )}
            />
            <LandmarkHeader landmarkData={tour} />
          </VStack>
          <MapModal handleClose={handleClose} isOpen={isOpen}>
            <MapPath
              coords={tour.landmarks.reduce<Array<ICoordinate>>(
                (prev, landmark) => [...prev, landmark.coordinate],
                []
              )}
            />
          </MapModal>
        </Box>
      </Link>
    </Box>
  );
}
