import { ILandmark } from "common";

async function getOne(id: string): Promise<ILandmark> {
  return {
    id: id,
    name: "Halászbástya",
    ratingCount: 500,
    time: 30,
    description:
      "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
    coordinate: { longitude: 47.501958, latitude: 19.034959 },
    address: "Budapest, Szentháromság tér, 1014",
    rating: 4.8,
    pictures: [
      "HalaszBastya/halaszbastya1.jpg",
      "HalaszBastya/halaszbastya2.jpg",
      "HalaszBastya/halaszbastya3.jpg",
      "HalaszBastya/halaszbastya4.jpg",
    ],
  };
}

async function getNear(): Promise<ILandmark[]> {
  return [
    {
      id: "3c329b99-5e82-42c6-9900-4df28f06dc35",
      name: "Halászbástya",
      ratingCount: 500,
      time: 30,
      description:
        "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
      coordinate: { longitude: 47.501958, latitude: 19.034959 },
      address: "Budapest, Szentháromság tér, 1014",
      rating: 4.8,
      pictures: [
        "HalaszBastya/halaszbastya1.jpg",
        "HalaszBastya/halaszbastya2.jpg",
        "HalaszBastya/halaszbastya3.jpg",
        "HalaszBastya/halaszbastya4.jpg",
      ],
    },
  ];
}

export const LandmarkQuery = {
  getOne,
  getNear,
};
