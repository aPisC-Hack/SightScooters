export interface ILandmarkData {
    name: string;
    description: string;
    coordinates: {
        longitude: number;
        latitude: number;
    }
    address: string;
    rating: number;
    ratingCount: number;
    pictures: Array<string>;
    time: number;
}