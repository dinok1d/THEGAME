const cards = [
  {
    id: 1,
    image:
      "https://onlineconsolegames.com/wp-content/uploads/2017/04/super-mario-world.jpg",
    name: "Mario",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    image: "https://genesismini.sega.com/img/titles/earthwormjim_lg.jpg",
    name: "Earthworm",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-1JhLM1WHQbDSXeCE1lyKcQmyyn_cY69pQ&usqp=CAU",
    name: "Sonic 3",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1A03PCkm_Bc0lQLLMKGdZbIrPdy25T3gew&usqp=CAU",
    name: "Castlevania",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
    name: "Sonic 1",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/06/Streets_of_Rage_%28cover%29.jpg",
    name: "Streets of rage",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    image: "https://i.ebayimg.com/images/g/0WkAAOxyyghQ9L8l/s-l300.jpg",
    name: "Madden",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/61w9tvkMJ0L.jpg",
    name: "Streets of rage 2",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Teenage_Mutant_Ninja_Turtles_-_The_Hyperstone_Heist_Coverart.png/220px-Teenage_Mutant_Ninja_Turtles_-_The_Hyperstone_Heist_Coverart.png",
    name: "TMNT",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    image: "https://segadoes.files.wordpress.com/2016/11/batmaneu.jpg",
    name: "Batman",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    image:
      "https://onlineconsolegames.com/wp-content/uploads/2017/04/super-mario-world.jpg",
    name: "Mario",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    image: "https://genesismini.sega.com/img/titles/earthwormjim_lg.jpg",
    name: "Earthworm",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-1JhLM1WHQbDSXeCE1lyKcQmyyn_cY69pQ&usqp=CAU",
    name: "Sonic 3",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1A03PCkm_Bc0lQLLMKGdZbIrPdy25T3gew&usqp=CAU",
    name: "Castlevania",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
    name: "Sonic 1",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/06/Streets_of_Rage_%28cover%29.jpg",
    name: "Streets of rage",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 17,
    image: "https://i.ebayimg.com/images/g/0WkAAOxyyghQ9L8l/s-l300.jpg",
    name: "Madden",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 18,
    image: "https://m.media-amazon.com/images/I/61w9tvkMJ0L.jpg",
    name: "Streets of rage 2",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Teenage_Mutant_Ninja_Turtles_-_The_Hyperstone_Heist_Coverart.png/220px-Teenage_Mutant_Ninja_Turtles_-_The_Hyperstone_Heist_Coverart.png",
    name: "TMNT",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 20,
    image: "https://segadoes.files.wordpress.com/2016/11/batmaneu.jpg",
    name: "Batman",
    image2:
      "https://www.kindpng.com/picc/m/73-739435_ask-a-rainmaker-question-mark-card-hd-png.png",
    isFlipped: false,
    isMatched: false,
  },
];
export default cards;
