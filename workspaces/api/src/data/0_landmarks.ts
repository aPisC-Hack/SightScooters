import config from "../config";
import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

/*
-------Landmark Ids----------
1 - Halászbástya
2 - Budavári Palota
3 - Hősök tere
4 - Vajdahunyad Vára
5 - Városliget
*/

export default async function () {
  await LandmarkModel.create({
      "name": "Halászbástya",
      "description": "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
      "coordinate": {
          "longitude": 47.501958,
          "latitude":  19.034959
      },
      "rating": 4.8,
      "ratingCount": 6969,
      "address": "Budapest, Szentháromság tér, 1014",
      "time": 10,
      "pictures": [
          config.contentService + "/HalaszBastya/halaszbastya1.jpg",
          config.contentService + "/HalaszBastya/halaszbastya2.jpg",
          config.contentService + "/HalaszBastya/halaszbastya3.jpg",
          config.contentService + "/HalaszBastya/halaszbastya4.jpg"
      ],
      "tags": [
        "Történelem",
        "Erőd",
        "Kávézó"
      ]
    
  });

  await LandmarkModel.create({
    "name": "Budavári Palota",
    "description": "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
    "coordinate": { 
        "longitude": 47.496444,
        "latitude": 19.039577
    },
    "rating": 4.7,
    "ratingCount": 420,
    "address": "Budapest, Szent György tér 2, 1014",
    "time": 9,
    "pictures": [
      config.contentService + "/BudavariPalota/budavariPalota1.jpg",
      config.contentService + "/BudavariPalota/budavariPalota2.jpg",
      config.contentService + "/BudavariPalota/budavariPalota3.jpg",
      config.contentService + "/BudavariPalota/budavariPalota4.jpg"
    ],
    "tags": [
      "Galéria",
      "Kilátás",
    ]
});

await LandmarkModel.create({
  "name": "Hősök tere",
  "description": "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
  "coordinate": {
      "longitude": 47.514907, 
      "latitude": 19.077734
  },
  "rating": 4.7,
  "ratingCount": 420,
  "address": "Budapest, Hősök tere, 1146",
  "time": 8,
  "pictures": [
    config.contentService +  "/HosokTere/hosokTere1.jpg",
    config.contentService +  "/HosokTere/hosokTere2.jpg",
    config.contentService +  "/HosokTere/hosokTere3.jpg",
    config.contentService +  "/HosokTere/hosokTere4.jpg"
  ],
  "tags": [
    "UNESCO Világörökség",
    "Történelem",
  ]
});

await LandmarkModel.create({
  "name": "Vajdahunyad Vára",
  "description": "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magépítészet fejlődését mutatja be.",
  "coordinate": {
      "longitude": 47.514549, 
      "latitude": 19.082684
  },
  "rating": 4.7,
  "ratingCount": 1337,
  "address": "Budapest, Vajdahunyad stny., 1146",
  "time": 7,
  "pictures": [
    config.contentService +  "/VajdahunyadVara/vajdahunyadVara1.jpg",
    config.contentService +  "/VajdahunyadVara/vajdahunyadVara2.jpg",
    config.contentService +  "/VajdahunyadVara/vajdahunyadVara3.jpg",
    config.contentService +  "/VajdahunyadVara/vajdahunyadVara4.jpg"
  ],
  "tags": [
    "Történelem",
    "Erőd",
    "Építészet"
  ]
});

await LandmarkModel.create({
  "name": "Városliget",
  "description": "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
  "coordinate": {
      "longitude": 47.513235, 
      "latitude": 19.085618
  },
  "rating": 4.6,
  "ratingCount": 9001,
  "address": "Budapest, Kós Károly stny., 1146",
  "time": 6,
  "pictures": [
    config.contentService +  "/Varosliget/varosliget1.jpg",
    config.contentService +  "/Varosliget/varosliget2.jpg",
    config.contentService +  "/Varosliget/varosliget3.jpg",
    config.contentService +  "/Varosliget/varosliget4.jpg"
  ],
  "tags": [
    "Park",
    "Erőd",
    "Rendezvények"
  ]
});

//...
}
