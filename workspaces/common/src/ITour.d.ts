import { ILandmark } from "./ILandmark";

export interface ITour {
  time: number;
  name: string;
  landmarks: Array<ILandmark>;
}
