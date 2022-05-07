import { Route } from "react-router-dom";
import { ITour } from "../../../common/src/ITour";
import TourContainer from "../components/landmark/TourContainer";
import Map from "../components/map/Map";
import MapLayer from "../components/map/MapLayer";
import MapPath from "../components/map/MapPath";
import MapSource from "../components/map/MapSource";
import LandmarkPage from "../pages/LandmarkPage";
import RecommendationPage from "../pages/RecommendationPage";
import TourInfoPage from "../pages/TourInfoPage";
import TourPage from "../pages/TourPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";

const tours: ITour[] = [
  {
    description: "asdf",
    id: "asdf",
    name: "asdf",
    rating: 1,
    ratingCount: 33,
    time: 30,
    landmarks: [
      {
        id: "1",
        ratingCount: 2,
        time: 20,
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinate: {
          longitude: 47.501958,
          latitude: 19.034959,
        },
        address: "Budapest, Szentháromság tér, 1014",
        rating: 4.8,
        pictures: [
          "HalaszBastya/halaszbastya1.jpg",
          "HalaszBastya/halaszbastya2.jpg",
          "HalaszBastya/halaszbastya3.jpg",
          "HalaszBastya/halaszbastya4.jpg",
        ],
      },
      {
        id: "2",
        ratingCount: 2,
        time: 20,
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinate: {
          longitude: 47.496444,
          latitude: 19.039577,
        },
        address: "Budapest, Szent György tér 2, 1014",
        rating: 4.7,
        pictures: [
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
        ],
      },
      {
        id: "3",
        ratingCount: 2,
        time: 20,
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinate: {
          longitude: 47.514907,
          latitude: 19.077734,
        },
        address: "Budapest, Hősök tere, 1146",
        rating: 4.7,
        pictures: [
          "HosokTere/hosokTere1.jpg",
          "HosokTere/hosokTere2.jpg",
          "HosokTere/hosokTere3.jpg",
          "HosokTere/hosokTere4.jpg",
        ],
      },
      {
        id: "4",
        ratingCount: 2,
        time: 20,
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinate: {
          longitude: 47.514549,
          latitude: 19.082684,
        },
        address: "Budapest, Vajdahunyad stny., 1146",
        rating: 4.7,
        pictures: [
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
        ],
      },
      {
        id: "5",
        ratingCount: 2,
        time: 20,
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinate: {
          longitude: 47.513235,
          latitude: 19.085618,
        },
        address: "Budapest, Kós Károly stny., 1146",
        rating: 4.6,
        pictures: [
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
        ],
      },
      {
        id: "6",
        ratingCount: 2,
        time: 20,
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinate: {
          longitude: 47.501958,
          latitude: 19.034959,
        },
        address: "Budapest, Szentháromság tér, 1014",
        rating: 4.8,
        pictures: [
          "HalaszBastya/halaszbastya1.jpg",
          "HalaszBastya/halaszbastya2.jpg",
          "HalaszBastya/halaszbastya3.jpg",
          "HalaszBastya/halaszbastya4.jpg",
        ],
      },
      {
        id: "7",
        ratingCount: 2,
        time: 20,
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinate: {
          longitude: 47.496444,
          latitude: 19.039577,
        },
        address: "Budapest, Szent György tér 2, 1014",
        rating: 4.7,
        pictures: [
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
          "BudavariPalota/budavariPalota1.jpg",
        ],
      },
      {
        id: "8",
        ratingCount: 2,
        time: 20,
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinate: {
          longitude: 47.514907,
          latitude: 19.077734,
        },
        address: "Budapest, Hősök tere, 1146",
        rating: 4.7,
        pictures: [
          "HosokTere/hosokTere1.jpg",
          "HosokTere/hosokTere2.jpg",
          "HosokTere/hosokTere3.jpg",
          "HosokTere/hosokTere4.jpg",
        ],
      },
      {
        id: "9",
        ratingCount: 2,
        time: 20,
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinate: {
          longitude: 47.514549,
          latitude: 19.082684,
        },
        address: "Budapest, Vajdahunyad stny., 1146",
        rating: 4.7,
        pictures: [
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
          "VajdahunyadVara/vajdahunyadVara1.jpg",
        ],
      },
      {
        id: "10",
        ratingCount: 2,
        time: 20,
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinate: {
          longitude: 47.513235,
          latitude: 19.085618,
        },
        address: "Budapest, Kós Károly stny., 1146",
        rating: 4.6,
        pictures: [
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
          "Varosliget/varosliget1.jpg",
        ],
      },
    ],
  },
];

export const appRoutes = [
  <Route path="/" element={<WelcomePage />} />,
  <Route path="/recommendation" element={<RecommendationPage />} />,
  <Route path="/tour-info/:tourId" element={<TourInfoPage />} />,
  <Route path="/tour/:tourId" element={<TourPage />} />,
  <Route path="/landmark/:landmarkId" element={<LandmarkPage />} />,
  <Route path="/dev-map" element={<TourContainer tours={tours} />} />,
];
