import { ILandmark, ITour } from "common";
import SimpleLandmarkContainer from "../../components/landmark/SimpleLandmarkContainer";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";
import { LandmarkQuery } from "../../queries/landmark.query";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

type Props = {};

export default function LandmarkPage({}: Props) {
  const api = useApiCall(() => LandmarkQuery.getNear());
  const [selectedPlaces, setSelectedPlaces] = useState<Array<string>>([]);
  if (!api.value) return null;
  return (
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
      <Button
        disabled={selectedPlaces == []}
        onClick={() => {
          TourQuery.uploadCustomTour({
            description: "",
            id: "",
            landmarks: (api.value as Array<ILandmark>).filter((landmark) =>
              selectedPlaces.includes(landmark.id)
            ),
            name: "",
            rating: 0,
            ratingCount: 0,
            time: 0,
          });
        }}
      >
        Continue
      </Button>
    </VStack>
  );
}
