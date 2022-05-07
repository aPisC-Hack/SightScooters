import config from "../config";
import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

/*
-------Landmark Ids----------
0 - Halászbástya
1 - Budavári Palota
2 - Hősök tere
3 - Vajdahunyad Vára
4 - Városliget
5 - Gamerland
6 - Burger
7 - Auchan 
*/

export default async function () {
  await LandmarkModel.create({
      "name": "Halászbástya",
      "description": "19. századi erőd 7 kilátótornyokkal, panorámás kilátással és kávézóval a teraszon. A budapesti bulinegyed helyén már több mint száz évvel ezelőtt is pezsgő, vibráló éjszakai élet zajlott, a kávéházakban, mulatokban és kéjbarlangokban pedig sötét alakok, kettős életet élő köztiszteletben álló figurák váltak a kokain rabjává. Vagy éppen váltak legendává. A fehér por most is ott van a városban, a séta során pedig megelevenedik mindaz, ami vele jár: a luxus, az elit világa, a függőség, a kor magyar kokainkereskedői, és a rendszer, amiben mindezek összeérnek. Feltárul előttünk egy titokzatos, zárt világ, ami valójában ott kísért a mindennapjainkban is, még ha eddig nem is tudtunk róla.",
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
    
  });

  await LandmarkModel.create({
    "name": "Budavári Palota",
    "description": "A Magyar Nemzeti Galéria fényűző helyszíne, ahol a gótikus oltároktól a szobrokig sok minden látható. Az atyák Balatonra néző fűszerkertjéből élvezhetjük az Apátságot beragyogó első hajnali napsugarakat. Mikor a Balaton vizén tükröződő fények már arany színben játszanak, és Tihany ébredezni kezd, mi folytatjuk utunkat a tömjén illatával belengett altemplomba. Miközben a felkelő Nap fénye beragyogja I. András sírját, meghallgatjuk a bencés diákok páratlan gregorián énekét. Az altemplomból felsétálunk a barokk templomba, ahol a hajnali csendben közelebb kerülhetünk saját magunkhoz is, mielőtt megkezdődne a nappali nyüzsgés.",
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
});

await LandmarkModel.create({
  "name": "Hősök tere",
  "description": "Az UNESCO világörökség részét képezi, a Magyarországot alapító 7 törzs vezéreinek szobrát vonultatja fel. A hatalmas, szecessziós stílusú szálloda központi kupoláját római fürdők ihlették, reprezentatív helyiségei, az éttermek, társastermek mind a Gellért térre és a dunai panorámára nyíltak. Az új szállodában olyan, ma már nehezebben értelmezhető helyiségek várták a vendégeket, mint az író- és olvasóterem, női szalon és zeneterem.",
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
});

await LandmarkModel.create({
  "name": "Vajdahunyad Vára",
  "description": "Ez az 1896-ban elkészült vár részletgazdag formavilágával a magépítészet fejlődését mutatja be. Ebben az időszakban történt, hogy Ramon Costellót, a kubai származású amerikai ökölvívót nem engedték be a Gellért fürdőbe, mert a fehér amerikai és brit vendégek tiltakozni kezdtek. Costello panaszt tett a fővárosnál, ahol neki adtak igazat, az ügy pedig a nemzetközi sajtóba is bekerült.",
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
});

await LandmarkModel.create({
  "name": "Városliget",
  "description": "Nagy park pálmaházzal, koncerthelyszínekkel és múzeumokkal, emellett fás sétányokkal és rétekkel. A név hallatán sokaknak már csak a „Gyere, gyere ki a hegyoldalba” jut eszébe, pedig valaha ez volt Buda legnagyobb, legtarkább negyede. Hogyan lett a török tímárnegyed romjaiból módos, peckes Rácváros? Ki mindenki élt itt a szőlőből, a fürdőkből, bor- és lánykereskedésből, irodalomból vagy órásmesterségből? Pusztította tűzvész, árvíz, járvány, végzetes csapásként a filoxéra – aztán jött a bontás, majd a II. világháború s végül az új Erzsébet híd építése jóformán az utolsó kis házakat is elsöpörte. De mégis: Szent Katalin templomának árnyékában büszke tabániak élnek, a domboldalon pedig egy 330 éves törökszederfa.  ",
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
});

await LandmarkModel.create({
  "name": "Gamerland",
  "description": "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
  "coordinate": {
      "longitude": 47.557147, 
      "latitude": 19.046440 
  },
  "rating": 4.8,
  "ratingCount": 2022,
  "address": "Budapest Szentendrei út 89-95. 2. ép. 4. lház. I. em, 1033",
  "time": 1,
  "pictures": [
    config.contentService +  "/Gamerland/gamerland1.jpg",
    config.contentService +  "/Gamerland/gamerland2.jpg",
    config.contentService +  "/Gamerland/gamerland3.jpg",
    config.contentService +  "/Gamerland/gamerland4.jpg"
  ],
});

await LandmarkModel.create({
  "name": "American Burger & Steak House",
  "description": "A házhozszállításon kívül éttermünkben is várjuk kedves vendégeinket! Mindennap 21:30-ig szállítunk a III., XIII., XIV., kerületekbe, valamint Ürömre, Pomázra és Budakalászra. A vöröshagymát apróra felkockázzuk, és kevés olívaolajon (vagy amin szeretnénk) elkezdjük párolni. Ha már üveges, rádobjuk a picire vágott fokhagymát. Maximum fél percig sütjük együtt, és rádobjuk a darált húst. Folyamatos kevergetés mellett pirítjuk. A pirítás közepe fele elkezdjük fűszerezni. Rászórjuk a sót, borsot, majorannát, oregánót, petrezselymet, fahéjat és darált erőspaprikát. Ha már késznek tűnik a hús, megszórjuk pirospaprikával, ráöntjük a konzerv babot és kukoricát (a leve nélkül). Kis keverés után felöntjük a paradicsomlével. A megadott mennyiség nem pontos, a lényeg, hogy éppen ellepje az ételt. Elkezdjük főzni, és közben hozzáadjuk a cayenne borsot vagy bármilyen más csípős fűszert, amit szeretünk. A mennyisége természetesen ízlés kérdése. Kb. 10 percig főzzük, és tálalható.",
  "coordinate": {
      "longitude": 47.555750, 
      "latitude": 19.046063
  },
  "rating": 4.6,
  "ratingCount": 777,
  "address": "Budapest, Reményi Ede u. 1, 1033",
  "time": 2,
  "pictures": [
    config.contentService +  "/Burger/burger1.jpg",
    config.contentService +  "/Burger/burger2.jpg",
    config.contentService +  "/Burger/burger3.jpg",
    config.contentService +  "/Burger/burger4.jpg"
  ],
});

await LandmarkModel.create({
  "name": "Auchan",
  "description": "Áruházunk polcait folyamatosan töltjük, de nagyobb forgalmú hétvége után, ez egy kicsit több időt vesz igénybe, mindent megteszünk annak érdekében, hogy szépen feltöltött, és rendezett polcokkal várjuk kedves vásárlóinkat. Szeretnél barátokkal, családdal vagy kollégákkal privát Bor, gyógyvíz, törökszeder sétát? A sétát magánprogramként is megrendelheted, ennek ára: nettó 112 245 Ft + Áfa. Időpontegyeztetésért kérlek vedd fel velünk a kapcsolatot az info@hosszulepes.org címen. Hosszúlépés élmény, csak Nektek",
  "coordinate": {
      "longitude": 47.559148, 
      "latitude": 19.050236
  },
  "rating": 4.2,
  "ratingCount": 8888,
  "address": "Budapest, Szentendrei út 115, 1033",
  "time": 5,
  "pictures": [
    config.contentService +  "/Burger/burger1.jpg",
    config.contentService +  "/Burger/burger2.jpg",
    config.contentService +  "/Burger/burger3.jpg",
    config.contentService +  "/Burger/burger4.jpg"
  ],
});

//...
}
