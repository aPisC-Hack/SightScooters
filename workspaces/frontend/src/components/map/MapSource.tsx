import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = { coordinates: Array<[number, number]> };

export default function MapSource({ coordinates }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      },
    });
  }, [map]);

  return null;
}
