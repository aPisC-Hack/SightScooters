import { ICoordinate } from "./ICoordinate";

export interface ILandmark {
  id: string;
  name: string;
  description: string;
  coordinate: ICoordinate;
  address: string;
  rating: number;
  ratingCount: number;
  pictures: Array<string>;
  time: number;
  tags: Array<string>
}
