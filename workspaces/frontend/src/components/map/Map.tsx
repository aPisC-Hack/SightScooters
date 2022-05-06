import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { IMarker } from "./IMarker";
import { MarkerIcon } from "./MarkerIcon";

type Props = {
  markers: Array<IMarker>;
};

export default function Map({ markers }: Props) {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [mapId, setMapId] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMarker, setCurrentMarker] = useState<IMarker | null>(null);
  const handleClose = () => {
    setCurrentMarker(null);
    onClose();
  };
  useEffect(() => {
    setMapId(Math.random());
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.longitude, position.coords.latitude]);
    });
  }, []);
  return (
    <Box width="100%" height="100%">
      <MapContainer
        whenCreated={(mapInstance) =>
          setTimeout(() => mapInstance.invalidateSize(), 200)
        }
        key={mapId}
        center={currentPosition}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              riseOnHover
              icon={MarkerIcon}
              position={[marker.longitude, marker.latitude]}
              eventHandlers={{
                click: (e) => {
                  setCurrentMarker(marker);
                  onOpen();
                },
              }}
            ></Marker>
          );
        })}
      </MapContainer>
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentMarker && <Box>currentMarker.content</Box>}
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
