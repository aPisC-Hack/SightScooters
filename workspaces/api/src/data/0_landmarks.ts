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
6 - Gamerland
7 - Burger
8 - Auchan 
9 - Sziget
10- Graffiti
11- Park
*/

export default async function () {
  await LandmarkModel.create({
    name: "Fisherman's bastion",
    description:
      "The Fisherman's Bastion is one of the most famous monuments in Budapest , located in the Buda Castle , in the 1st district of Budapest. Due to the unique panorama of Budapest from the Neo-Romanesque lookout terraces, it is one of the most significant tourist attractions. The main façade of the Fisherman's Bastion parallel to the Danube is about 140 meters long, of which the length of the southern corridor is about 40 meters, the northern one 65 meters long, while the ornate central parapet wall is 35 meters long. Its stone towers with pointed caps symbolize the seven Hungarian conquering leaders .",
    coordinate: {
      latitude: 47.501958,
      longitude: 19.034959,
    },
    rating: 4.8,
    ratingCount: 6969,
    address: "Budapest, Szentháromság tér, 1014",
    time: 10,
    pictures: [
      config.contentService + "/HalaszBastya/halaszbastya1.jpg",
      config.contentService + "/HalaszBastya/halaszbastya2.jpg",
      config.contentService + "/HalaszBastya/halaszbastya3.jpg",
      config.contentService + "/HalaszBastya/halaszbastya4.jpg",
    ],
    tags: ["History", "Bastion", "Coffee"],
    price: 1200,
  });

  await LandmarkModel.create({
    name: "Buda Castle",
    description:
      "Monument castle on the hill above the city.There are galleries, spots to enjoy the view or admire the architecture, visit history expositions,try some medieval activities with locals or buy some arts. You can walk up but there is also a cable car to the right hand side as you look at the building opposite the bridge. Lovely views and they had a palinka and whiskey festival at the top. Extra cost. Don't miss the World Heritage-listed Royal Palace and Castle Hill. Home to the Hungarian National Gallery, the Budapest History Museum, famous Fishermen's Bastion, tiled roof of the Matthias Church.",
    coordinate: {
      latitude: 47.496444,
      longitude: 19.039577,
    },
    rating: 4.7,
    ratingCount: 420,
    address: "Budapest, Szent György tér 2, 1014",
    time: 9,
    pictures: [
      config.contentService + "/BudavariPalota/budavariPalota1.jpg",
      config.contentService + "/BudavariPalota/budavariPalota2.jpg",
      config.contentService + "/BudavariPalota/budavariPalota3.jpg",
      config.contentService + "/BudavariPalota/budavariPalota4.jpg",
    ],
    tags: ["Galery", "Sightseeing"],
    price: 1500,
  });

  await LandmarkModel.create({
    name: "Hősök tere",
    description:
      "Heroes' Square is the most spacious and most influential square in Budapest in the 14th century. district , in the narrower sense, denotes the Millennium Monument. Heroes' Square, together with the Andrássy Avenue in front of it , is a World Heritage Site. It is located on the axis of Andrássy út , on the western side of Városliget . / In addition, there are three Heroes' Square in Budapest : one in Rákosszentmihály ( District XVI ), one in the center of Soroksár ( District XXIII ), and one in Rákosliget ( District XVII ) ./ Andrássy út connects Terézváros with the city center .",
    coordinate: {
      latitude: 47.514907,
      longitude: 19.077734,
    },
    rating: 4.7,
    ratingCount: 420,
    address: "Budapest, Hősök tere, 1146",
    time: 8,
    pictures: [
      config.contentService + "/HosokTere/hosokTere1.jpg",
      config.contentService + "/HosokTere/hosokTere2.jpg",
      config.contentService + "/HosokTere/hosokTere3.jpg",
      config.contentService + "/HosokTere/hosokTere4.jpg",
    ],
    tags: ["World Heritage", "History"],
    price: 800,
  });

  await LandmarkModel.create({
    name: "Hunedoara Castle",
    description:
      "he Vajdahunyad Castle or Vajdahunyad Castle , officially known as the Historical Building Group by Ignác Alpár, Budapest XIV. district , in the City Park . Lake Városligeti is located on the Széchenyi Island, which can be reached via four bridges . The castle was built for the purpose of the Hungarian Agricultural Museum between 1902 and 1908, so it serves the purposes of the museum, with the exception of the Jáki Chapel , consecrated on August 8, 1915 and given to the Roman Catholic Church. Today, the common name is Governor János Hunyadi and Erzsébet Szilágyiit was obtained from the most characteristic part of his residence, from the main facade of Heroes' Square, modeled on the castle of Vojvodina.",
    coordinate: {
      latitude: 47.514549,
      longitude: 19.082684,
    },
    rating: 4.7,
    ratingCount: 1337,
    address: "Budapest, Vajdahunyad stny., 1146",
    time: 7,
    pictures: [
      config.contentService + "/VajdahunyadVara/vajdahunyadVara1.jpg",
      config.contentService + "/VajdahunyadVara/vajdahunyadVara2.jpg",
      config.contentService + "/VajdahunyadVara/vajdahunyadVara3.jpg",
      config.contentService + "/VajdahunyadVara/vajdahunyadVara4.jpg",
    ],
    tags: ["History", "Bastion", "Architect"],
    price: 1000,
  });

  await LandmarkModel.create({
    name: "City Park",
    description:
      "Városliget is a part of Budapest and the second largest public park in the 14th century. district . It is one of the first public parks in the world in chronological order. Its area is 100 to 120 hectares (1 to 1.2 km²) , depending on the definition . Of this, about 81 hectares is the actual park, and it has approx. It consists of 6500 trees. Another 19 hectares are the Capital Zoo and Botanical Garden , as well as museums and other buildings. Nicknamed Liget , formerly funny Lizsé. It is a popular resting place and cultural center of the capital , with many sights andattractions on its borders. As a part of the city, some residential and office buildings areofficially added to the outskirts. ",
    coordinate: {
      latitude: 47.513235,
      longitude: 19.085618,
    },
    rating: 4.6,
    ratingCount: 9001,
    address: "Budapest, Kós Károly stny., 1146",
    time: 6,
    pictures: [
      config.contentService + "/Varosliget/varosliget1.jpg",
      config.contentService + "/Varosliget/varosliget2.jpg",
      config.contentService + "/Varosliget/varosliget3.jpg",
      config.contentService + "/Varosliget/varosliget4.jpg",
    ],
    tags: ["Park", "Nature", "Bastion", "Community Events"],
    price: 3000,
  });

  await LandmarkModel.create({
    name: "Varian",
    description:
      "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
    coordinate: {
      latitude: 47.490453,
      longitude: 19.020224,
    },
    rating: 4.8,
    ratingCount: 2022,
    address: "Budapest, Csörsz u. 45, 1124 Magyarország",
    time: 1,
    pictures: [
      config.contentService + "/Gamerland/gamerland1.jpg",
      config.contentService + "/Gamerland/gamerland2.jpg",
      config.contentService + "/Gamerland/gamerland3.jpg",
      config.contentService + "/Gamerland/gamerland4.jpg",
    ],
    tags: ["Gaming", "Hackathon", "Esports"],
    price: 600,
  });

  await LandmarkModel.create({
    name: "American Burger & Steak House",
    description:
      "Hungry? This is the place! Best Burger place in entire Budapest! French and Belgium beer in combination with the delicious food it’s a winner!Nice,friendly and very service minded staff! The place has a classic American diner style, nice and clean. Not too fancy just the way it should be! Very pleasantly surprised! We fell into this restaurant by accident. i got chicken quesadilla and my wife Merry Widow hamburger with sweet potatoes and cole slaw. The food was excellent and we plan on eating there again. Highly recommend it.",
    coordinate: {
      latitude: 47.55575,
      longitude: 19.046063,
    },
    rating: 4.6,
    ratingCount: 777,
    address: "Budapest, Reményi Ede u. 1, 1033",
    time: 2,
    pictures: [
      config.contentService + "/Burger/burger1.jpg",
      config.contentService + "/Burger/burger2.jpg",
      config.contentService + "/Burger/burger3.jpg",
      config.contentService + "/Burger/burger4.jpg",
    ],
    tags: ["Food", "Drinks"],
    price: 400,
  });

  await LandmarkModel.create({
    name: "Auchan",
    description:
      "Auchan ( IPA : oʃɑ̃ ) is a French international retail group and multinational company headquartered in Croix , Lille , France . Auchan currently employs 287,000 people and operates 1,774 stores in 12 countries around the world. Auchan is present in France , Italy , Spain , Portugal , Luxembourg , Poland , Hungary , Russia , Romania , Ukraine , China and Taiwan. Auchan was founded in 1961 in France . Its founder and majority owner is Gérard Mulliez, who opened his first store in the Hauts Champs (Highlands) district of Roubaix in northern France : the name of the chain is derived from an alternative French description.",
    coordinate: {
      latitude: 47.559148,
      longitude: 19.050236,
    },
    rating: 4.2,
    ratingCount: 8888,
    address: "Budapest, Szentendrei út 115, 1033",
    time: 5,
    pictures: [
      config.contentService + "/Auchan/auchan1.jpg",
      config.contentService + "/Auchan/auchan2.jpg",
      config.contentService + "/Auchan/auchan3.jpg",
      config.contentService + "/Auchan/auchan4.jpg",
    ],
    tags: ["Shopping", "Food"],
    price: 2000,
  });

  await LandmarkModel.create({
    name: "Óbuda Island",
    description:
      "Óbuda Island , also known as Shipyard Island, is an island in the Danube in Budapest III. in the administrative area of ​​the district . In the form of Óbuda Island (ie in one word) it is also a part of Budapest. It is a popular place for excursions, but it has become more famous not because of it, but because of the Sziget Festival , which has been held here every year since 1993 . The island formed from the alluvium of the Danube is located along the banks of the Óbuda, between 1651 and 1654 km. It has an area of ​​108  hectares , a length of 2750 m and a maximum width of 500-500 m on the 1653 river kilometer line. It is separated from Óbuda by a 70-80 m wide branch of the Danube, the Árpád Bridge crosses at its southern end . It was originally an reef island and consisted of two nearby parts. ",
    coordinate: {
      latitude: 47.55115,
      longitude: 19.054117,
    },
    rating: 4.7,
    ratingCount: 6969,
    address: "Budapest",
    time: 7,
    pictures: [
      config.contentService + "/ObudaiSziget/sziget1.jpg",
      config.contentService + "/ObudaiSziget/sziget2.jpg",
      config.contentService + "/ObudaiSziget/sziget3.jpg",
      config.contentService + "/ObudaiSziget/sziget4.jpg",
    ],
    tags: ["Park", "Island", "Nature"],
    price: 500,
  });

  await LandmarkModel.create({
    name: "Graffies",
    description:
      "The first legal wall of Budapest has provided a surface for graffiti of various styles, sizes and colors since 1990. It is a defining place of the birth of the Hungarian graffiti culture, which can be traced back to the early 90's. Legal works are placed on the walls of Fila (graffiti is the only way they call the place among themselves). No one sends creators at work, they have time for meticulous elaboration, they can spend up to a day or two perfecting. In addition, the walls of the right size are in a very good place in terms of graffiti: it is easy to get out of the city center, it is easier to organize the team; next to the Hév stop, the drawings can be seen by many, the endless wall surface running parallel to the train tracks. The Sziget festival plays a significant role in the popularity of the Philatoriga, as it is known that the wall is also seen by tens of thousands of foreigners, it functions as a kind of advertising space of the Hungarian graffiti scene during the festival. During the week of the festival, the creators usually cover each other several times, this is the genre. Hundreds and hundreds of photos are taken of the drawings to comfort the creators. And documentation is very important in the world of graffiti!",
    coordinate: {
      latitude: 47.550375,
      longitude: 19.047128,
    },
    rating: 4.9,
    ratingCount: 10,
    address: "Budapest, Bogdáni út 1, 1033",
    time: 6,
    pictures: [
      config.contentService + "/Graffiti/graffiti1.jpg",
      config.contentService + "/Graffiti/graffiti2.jpg",
      config.contentService + "/Graffiti/graffiti3.jpg",
      config.contentService + "/Graffiti/graffiti4.jpg",
    ],
    tags: ["Art", "Culture"],
    price: 1000,
  });

  await LandmarkModel.create({
    name: "Bud Spencer park",
    description:
      "It is not without precedent that a public space is renamed by the people living there before a formal decision is made on the matter. After five years in Kaszásdűlő, Bud Spencer Park is now the grassy area between Búza utca, Köles utca, Szérűskert utca and Zab utca. The official public space sign was drilled by dr. Inaugurated by László Kiss and András Béres. The meadow in Kaszásdűlő has been called Bud Spencer park in public discourse since 2016, the year of the artist's death. Given that a person can only be named a public space five years after his or her death, a citizen’s initiative and dr. At the suggestion of Mayor László Kiss, the Budapest General Assembly recently discussed the matter and decided on a renaming.",
    coordinate: {
      latitude: 47.555745,
      longitude: 19.04372,
    },
    rating: 4.5,
    ratingCount: 101,
    address: "Budapest, Unnamed Road, 1033",
    time: 4,
    pictures: [
      config.contentService + "/BudSpencerPark/park1.jpg",
      config.contentService + "/BudSpencerPark/park2.jpg",
      config.contentService + "/BudSpencerPark/park3.jpg",
      config.contentService + "/BudSpencerPark/park4.jpg",
    ],
    tags: ["Nature", "Culture", "Park"],
    price: 1500,
  });

  //...
}
