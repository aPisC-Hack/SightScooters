import { useInterval } from "@chakra-ui/react";
import { useState } from "react";
import { ICoordinate } from "../../../common/src/ICoordinate";

export function useNavigator(defaultPos: ICoordinate): ICoordinate;
export function useNavigator(
  defaultPos: ICoordinate | null
): ICoordinate | null;
export function useNavigator(defaultPos: ICoordinate | null): any {
  const [coords, setCoords] = useState<ICoordinate | null>(defaultPos);
  useInterval(() => {
    navigator.geolocation.getCurrentPosition((pos) =>
      setCoords({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      })
    );
  }, 500);

  return coords;
}
