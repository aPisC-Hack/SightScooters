export interface Landmark {
    id: string;
    name: string;
    description: string; 
    coordinates: {
        longitude: number, 
        latitude: number
    };
    address: string;
    rating: number;
    pictures: string[];
}