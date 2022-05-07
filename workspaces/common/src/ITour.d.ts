import { ILandmark } from "./ILandmark";

export interface ITour {
  time: number;
  landmarks: Array<ILandmark>;
  id: string;
  name: string;
  description: string;
  rating: number;
  ratingCount: number;
}
