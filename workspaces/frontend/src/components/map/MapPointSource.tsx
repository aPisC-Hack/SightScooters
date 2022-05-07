import { ICoordinate } from "common";
import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = {
  coordinate: ICoordinate;
  address: string;
};

export default function MapPointSource({ coordinate, address }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [coordinate.longitude, coordinate.latitude] as [
              number,
              number
            ],
          },
          properties: {},
        },
      ],
    };
    geojson.features.map((feature) => {
      new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(address))
        .addTo(map);
    });
    map.setCenter([coordinate.longitude, coordinate.latitude] as [
      number,
      number
    ]);
  }, [map]);

  return null;
}
