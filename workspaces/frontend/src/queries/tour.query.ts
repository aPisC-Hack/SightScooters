async function getOne(id: string) {
  throw new Error("not-implemented");
}

export const TourQuery = { getOne };

/*
  const tour: ITour = {
    time: 30,
    name: "TourName",
    landmarks: [
      {
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinates: {
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
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinates: {
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
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinates: {
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
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinates: {
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
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinates: {
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
        name: "Halászbástya",
        description:
          "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon.",
        coordinates: {
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
        name: "Budavári Palota",
        description:
          "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható.",
        coordinates: {
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
        name: "Hősök tere",
        description:
          "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel.",
        coordinates: {
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
        name: "Vajdahunyad Vára",
        description:
          "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magyar építészet fejlődését mutatja be.",
        coordinates: {
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
        name: "Városliget",
        description:
          "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel.",
        coordinates: {
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
*/
