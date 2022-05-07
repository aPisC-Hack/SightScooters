import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { ITour } from "common";
import LandmarkBox from "./LandmarkBox";

type Props = {};

export default function LandmarkContainer({}: Props) {
  const tour: ITour = {
    id: "",
    time: 30,
    name: "TourName",
    landmarks: [
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinate: {
          longitude: 47.501958,
          latitude: 19.034959,
        },
        address: "Budapest, Szentháromság tér, 1014",
        rating: 4.8,
        ratingCount: 666,
        time: 30,
        pictures: [
          "HalaszBastya/halaszbastya1.jpg",
          "HalaszBastya/halaszbastya2.jpg",
          "HalaszBastya/halaszbastya3.jpg",
          "HalaszBastya/halaszbastya4.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinate: {
          longitude: 47.496444,
          latitude: 19.039577,
        },
        address: "Budapest, Szent György tér 2, 1014",
        rating: 4.7,
        ratingCount: 666,
        time: 20,
        pictures: [
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinate: {
          longitude: 47.514907,
          latitude: 19.077734,
        },
        address: "Budapest, Hősök tere, 1146",
        rating: 4.7,
        ratingCount: 666,
        time: 12,
        pictures: [
          "HosokTere/hosokTere1.jpg",
          "HosokTere/hosokTere2.jpg",
          "HosokTere/hosokTere3.jpg",
          "HosokTere/hosokTere4.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinate: {
          longitude: 47.514549,
          latitude: 19.082684,
        },
        address: "Budapest, Vajdahunyad stny., 1146",
        rating: 4.7,
        ratingCount: 666,
        time: 5,
        pictures: [
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinate: {
          longitude: 47.513235,
          latitude: 19.085618,
        },
        address: "Budapest, Kós Károly stny., 1146",
        rating: 4.6,
        ratingCount: 666,
        time: 56,
        pictures: [
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinate: {
          longitude: 47.501958,
          latitude: 19.034959,
        },
        address: "Budapest, Szentháromság tér, 1014",
        rating: 4.8,
        ratingCount: 666,
        time: 8,
        pictures: [
          "HalaszBastya/halaszbastya1.jpg",
          "HalaszBastya/halaszbastya2.jpg",
          "HalaszBastya/halaszbastya3.jpg",
          "HalaszBastya/halaszbastya4.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinate: {
          longitude: 47.496444,
          latitude: 19.039577,
        },
        address: "Budapest, Szent György tér 2, 1014",
        rating: 4.7,
        ratingCount: 666,
        time: 22,
        pictures: [
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinate: {
          longitude: 47.514907,
          latitude: 19.077734,
        },
        address: "Budapest, Hősök tere, 1146",
        rating: 4.7,
        ratingCount: 666,
        time: 42,
        pictures: [
          "HosokTere/hosokTere1.jpg",
          "HosokTere/hosokTere2.jpg",
          "HosokTere/hosokTere3.jpg",
          "HosokTere/hosokTere4.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinate: {
          longitude: 47.514549,
          latitude: 19.082684,
        },
        address: "Budapest, Vajdahunyad stny., 1146",
        rating: 4.7,
        ratingCount: 666,
        time: 30,
        pictures: [
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
        ],
      },
      {
        id: "7a0b2d99-ac3b-422f-a334-b78a10abc3c3",
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinate: {
          longitude: 47.513235,
          latitude: 19.085618,
        },
        address: "Budapest, Kós Károly stny., 1146",
        rating: 4.6,
        ratingCount: 666,
        time: 30,
        pictures: [
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
        ],
      },
    ],
  };
  return (
    <Box>
      <VStack
        gap={1}
        padding={2}
        maxH="100%"
        w="100%"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "blue",
            borderRadius: "24px",
          },
        }}
      >
        {tour.landmarks.map((landmark, index) => {
          return <LandmarkBox landmark={landmark} key={index} />;
        })}
      </VStack>
    </Box>
  );
}
