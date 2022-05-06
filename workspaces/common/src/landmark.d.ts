export interface Landmark {
    id: string;
    name: string;
    description: string; 
    coordinates: [number, number];
    address: string;
    rating: number;
    pictures: string[];
}