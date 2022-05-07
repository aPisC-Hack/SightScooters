import { ICoordinate } from "../../../../common/src/ICoordinate";

export function coordinateDistance(a: ICoordinate, b: ICoordinate) {
  console.log(a, b);
  return Math.sqrt(
    Math.pow(a.latitude - b.latitude, 2) +
      Math.pow(a.longitude - b.longitude, 2)
  );
}
