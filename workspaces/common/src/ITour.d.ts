import { ILandmark } from "./ILandmark";

export interface ITour {
  id: string;
  time: number;
  name: string;
  landmarks: Array<ILandmark>;
}
