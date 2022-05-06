import { ILandmarkData } from "./ILandmarkData";

export interface ILandmarkBox {
    landmarkData: ILandmarkData;
    images: Array<string>;
}