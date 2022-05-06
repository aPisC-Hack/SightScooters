import { ILandmarkData } from "./ILandmarkData";

export interface ITour {
    time: number;
    name: string;
    landmarks: Array<ILandmarkData>;
}