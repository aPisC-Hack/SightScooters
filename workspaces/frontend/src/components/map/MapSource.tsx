import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = {};

const coordinates = [
  {
    longitude: 47.501958,
    latitude: 19.034959,
  },
  {
    longitude: 47.496444,
    latitude: 19.039577,
  },
];

export default function MapSource({}: Props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    console.log("Register source");

    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates.map((coordinate) => {
            return [coordinate.latitude, coordinate.longitude];
          }),
        },
      },
    });
  }, [map]);

  return null;
}
