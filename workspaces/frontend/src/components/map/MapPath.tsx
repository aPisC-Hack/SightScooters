import React from "react";
import { useApiCall } from "../../hooks/useApiCall";
import MapLayer from "./MapLayer";
import MapSource from "./MapSource";
import { useMap } from "./useMap";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import { ICoordinate } from "../../../../common/src/ICoordinate";

type Props = {
  coords: Array<ICoordinate>;
};

export default function MapPath({ coords }: Props) {
  const api = useApiCall(() =>
    axios.get(
      "https://api.mapbox.com/directions/v5/mapbox/cycling/" +
        coords
          .map((coord) => {
            return [coord.latitude, coord.longitude];
          })
          .join(";") +
        "?geometries=geojson&steps=true&&access_token=" +
        mapboxgl.accessToken
    )
  );
  const map = useMap();

  if (!api.value) return null;
  return (
    <>
      <MapSource coordinates={api.value.data.routes[0].geometry.coordinates} />
      <MapLayer
        config={{
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#880000",
            "line-width": 6,
          },
        }}
      />
    </>
  );
}
