import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ICoordinate } from "../../../../common/src/ICoordinate";
import { ITour } from "../../../../common/src/ITour";
import { coordinateDistance } from "../../components/map/coordinateDistance";
import Map from "../../components/map/Map";
import MapPath from "../../components/map/MapPath";
import MapUser from "../../components/map/MapUser";
import MySpinner from "../../components/MySpinner";
import { useApiCall } from "../../hooks/useApiCall";
import { useNavigator } from "../../hooks/useNavigator";
import { TourQuery } from "../../queries/tour.query";
import LandmarkNavigationPanel from "./LandmarkNavigationPanel";

type Props = {};

export default function NavigationPage({}: Props) {
  const { tourId } = useParams();

  const api = useApiCall(() => TourQuery.getOne(tourId));
  const coords = useNavigator(null);

  if (!api.value) return <MySpinner />;
  if (!coords) return <MySpinner />;
  const tour = api.value as ITour;
  const landmarks = [...tour.landmarks];

  if (coords)
    landmarks.sort(
      (a, b) =>
        coordinateDistance(b.coordinate, coords) -
        coordinateDistance(a.coordinate, coords)
    );

  const nearestLandmark = landmarks[0];

  console.log(
    nearestLandmark,
    coordinateDistance(nearestLandmark.coordinate, coords as ICoordinate)
  );

  return (
    <Box width="100%" height="100%" pos="relative">
      <Map>
        <MapUser />
        <MapPath
          coords={landmarks.reduce<Array<ICoordinate>>(
            (prev, landmark) => [...prev, landmark.coordinate],
            []
          )}
        />
      </Map>
      <Box pos="absolute" top={0} left={0} right={0}>
        <LandmarkNavigationPanel landmark={nearestLandmark} />
      </Box>
    </Box>
  );
}
