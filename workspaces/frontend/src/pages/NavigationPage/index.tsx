import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ICoordinate } from "../../../../common/src/ICoordinate";
import { ITour } from "../../../../common/src/ITour";
import { coordinateDistance } from "../../components/map/coordinateDistance";
import Map from "../../components/map/Map";
import MapPath from "../../components/map/MapPath";
import MapPointSource from "../../components/map/MapPointSource";
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
  const landmarks = tour.landmarks;
  const sortedLandmarks = [...tour.landmarks];

  if (coords)
    sortedLandmarks.sort(
      (a, b) =>
        coordinateDistance(a.coordinate, coords) -
        coordinateDistance(b.coordinate, coords)
    );

  const nearestLandmark = sortedLandmarks.filter(
    (x) => coordinateDistance(x.coordinate, coords) < 0.0005
  )[0];

  return (
    <Box width="100%" height="100%" pos="relative">
      <Map>
        <MapPath
          coords={landmarks.reduce<Array<ICoordinate>>(
            (prev, landmark) => [...prev, landmark.coordinate],
            []
          )}
        />

        <MapUser />
        {landmarks.map((x) => (
          <MapPointSource
            key={x.id}
            coordinate={x.coordinate}
            address={x.name}
          />
        ))}
      </Map>
      {nearestLandmark && (
        <LandmarkNavigationPanel landmark={nearestLandmark} />
      )}
    </Box>
  );
}
