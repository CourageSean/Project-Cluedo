const suspectsArr = [
  {
    vorname: "Afrae",
    nachname: "",
    age: 26,
    job: "Designer",
    image: "",
    color: "",
  },
  {
    vorname: "Yousef",
    nachname: "Saqoul",
    age: 32,
    job: "Electrician",
    image: "",
    color: "red",
  },
  {
    vorname: "Steffen",
    nachname: "Klömpges",
    age: 27,
    job: "Bartender",
    image: "",
    color: "",
  },
  {
    vorname: "Simon",
    nachname: "Burghardt",
    age: 33,
    job: "Engineer",
    image: "",
    color: "",
  },
  {
    vorname: "Önder",
    nachname: "Tekin",
    age: 34,
    job: "Retail sales associate",
    image: "",
    color: "",
  },
  {
    vorname: "Marius",
    nachname: "Golabski",
    age: 37,
    job: "Operations manager",
    image: "",
    color: "",
  },
  {
    vorname: "Houra",
    nachname: "Shamshirkar",
    age: 29,
    job: "Lawyer",
    image: "",
    color: "",
  },
  {
    vorname: "Ferdinand",
    nachname: "Niemann",
    age: 30,
    job: "Marketing specialist",
    image: "",
    color: "",
  },
  {
    vorname: "Enes",
    nachname: "Yilmaz",
    age: 32,
    job: "Hair stylist",
    image: "",
    color: "",
  },
];
const weaponsArr = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];
const roomsArr = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
];

const selectRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
console.log(selectRandom(suspectsArr));

const pickMistery = () => {
  const pick = {
    suspect: selectRandom(suspectsArr),
    weapon: selectRandom(weaponsArr),
    room: selectRandom(roomsArr),
  };

  return pick;
};

const revealMistery = () => {
  console.log(pickMistery());
};
