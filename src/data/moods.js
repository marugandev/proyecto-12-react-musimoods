import { v4 as uuidv4 } from "uuid";

export const moods = [
  {
    id: uuidv4(),
    name: "Feliz",
    img: "/assets/images/moods/happy_mood.webp",
    category: "positive",
    genres: ["Pop", "Dance", "EDM", "Electrónica"],
    description:
      "Un estado de ánimo alegre y enérgico que irradia positividad y alegría.",
    color: "var(--mo-mood-color-happy)",
    songs: [
      {
        id: uuidv4(),
        name: "Happy",
        artist: "Pharrell Williams",
        genre: "Pop",
        year: 2013,
        duration: "3:53",
        youtubeId: "ZbZSe6N_BXs"
      },
      {
        id: uuidv4(),
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        genre: "Pop",
        year: 2014,
        duration: "4:30",
        youtubeId: "OPf0YbXqDm0"
      },
      {
        id: uuidv4(),
        name: "Wake Me Up",
        artist: "Avicii",
        genre: "Dance",
        year: 2013,
        duration: "4:07",
        youtubeId: "IcrbM1l_BoI"
      },
      {
        id: uuidv4(),
        name: "Con Calma",
        artist: "Daddy Yankee & Snow ",
        genre: "Dance",
        year: 2019,
        duration: "3:30",
        youtubeId: "DiItGE3eAyQ"
      },
      {
        id: uuidv4(),
        name: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        genre: "Pop",
        year: 2016,
        duration: "3:56",
        youtubeId: "ru0K8uYEZWw"
      },
      {
        id: uuidv4(),
        name: "This Girl",
        artist: "Kungs vs Cookin’ on 3 Burners",
        genre: "Dance",
        year: 2016,
        duration: "3:16",
        youtubeId: "2Y6Nne8RvaA"
      },
      {
        id: uuidv4(),
        name: "Titanium",
        artist: "David Guetta ft. Sia",
        genre: "EDM",
        year: 2011,
        duration: "4:05",
        youtubeId: "JRfuAukYTKg"
      },
      {
        id: uuidv4(),
        name: "We Found Love",
        artist: "Rihanna ft. Calvin Harris",
        genre: "Electrónica",
        year: 2011,
        duration: "3:35",
        youtubeId: "tg00YEETFzg"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Triste",
    img: "/assets/images/moods/sad_mood.webp",
    category: "negative",
    genres: ["Indie", "Acústico", "Blues", "Folk", "Alternativa"],
    description:
      "Un estado de ánimo melancólico, a menudo asociado con una sensación de tristeza o reflexión.",
    color: "var(--mo-mood-color-sad)",
    songs: [
      {
        id: uuidv4(),
        name: "Fix You",
        artist: "Coldplay",
        genre: "Rock Alternativo",
        year: 2005,
        duration: "4:55",
        youtubeId: "k4V3Mo61fJM"
      },
      {
        id: uuidv4(),
        name: "Creep",
        artist: "Radiohead",
        genre: "Rock Alternativo",
        year: 1992,
        duration: "4:19",
        youtubeId: "XFkzRNyygfk"
      },
      {
        id: uuidv4(),
        name: "I Will Follow",
        artist: "Death Cab for Cutie",
        genre: "Indie",
        year: 2005,
        duration: "3:09",
        youtubeId: "NDHY1D0tKRA"
      },
      {
        id: uuidv4(),
        name: "All I Want",
        artist: "Kodaline",
        genre: "Indie",
        year: 2012,
        duration: "5:05",
        youtubeId: "mtf7hC17IBM"
      },
      {
        id: uuidv4(),
        name: "The Night We Met",
        artist: "Lord Huron",
        genre: "Indie",
        year: 2015,
        duration: "3:28",
        youtubeId: "KtlgYxa6BMU"
      },
      {
        id: uuidv4(),
        name: "Hallelujah",
        artist: "Jeff Buckley",
        genre: "Acústico",
        year: 1994,
        duration: "6:53",
        youtubeId: "y8AWFf7EAc4"
      },
      {
        id: uuidv4(),
        name: "Slow Dancing in a Burning Room",
        artist: "John Mayer",
        genre: "Blues",
        year: 2006,
        duration: "4:02",
        youtubeId: "32GZ3suxRn4"
      },
      {
        id: uuidv4(),
        name: "Tears in Heaven",
        artist: "Eric Clapton",
        genre: "Blues",
        year: 1992,
        duration: "4:32",
        youtubeId: "JxPj3GAYYZ0"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Motivado",
    img: "/assets/images/moods/motivated_mood.webp",
    category: "positive",
    genres: ["Rock", "Electrónica", "Pop-Rock"],
    description:
      "Un estado de ánimo fuerte y enérgico que impulsa la concentración y la acción hacia las metas.",
    color: "var(--mo-mood-color-motivated)",
    songs: [
      {
        id: uuidv4(),
        name: "Eye of the Tiger",
        artist: "Survivor",
        genre: "Rock",
        year: 1982,
        duration: "4:05",
        youtubeId: "btPJPFnesV4"
      },
      {
        id: uuidv4(),
        name: "Don't Stop Believin'",
        artist: "Journey",
        genre: "Rock",
        year: 1981,
        duration: "4:11",
        youtubeId: "1k8craCGpgs"
      },
      {
        id: uuidv4(),
        name: "Stronger",
        artist: "Kanye West",
        genre: "Electrónica",
        year: 2007,
        duration: "5:12",
        youtubeId: "PsO6ZnUZI0g"
      },
      {
        id: uuidv4(),
        name: "The Nights",
        artist: "Avicii",
        genre: "Electrónica",
        year: 2014,
        duration: "2:57",
        youtubeId: "UtF6Jej8yb4"
      },
      {
        id: uuidv4(),
        name: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock",
        year: 2017,
        duration: "3:24",
        youtubeId: "7wtfhZwyrcc"
      },
      {
        id: uuidv4(),
        name: "We Will Rock You",
        artist: "Queen",
        genre: "Rock",
        year: 1977,
        duration: "2:02",
        youtubeId: "-tJYN-eG1zk"
      },
      {
        id: uuidv4(),
        name: "Sandstorm",
        artist: "Darude",
        genre: "Electrónica",
        year: 1999,
        duration: "3:45",
        youtubeId: "y6120QOlsfU"
      },
      {
        id: uuidv4(),
        name: "It's My Life",
        artist: "Bon Jovi",
        genre: "Pop-Rock",
        year: 2000,
        duration: "3:44",
        youtubeId: "vx2u5uUu3DE"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Relajado",
    img: "/assets/images/moods/relaxed_mood.webp",
    category: "neutral",
    genres: ["Jazz", "Lo-Fi", "Chillout", "Ambiental", "Instrumental"],
    description:
      "Un estado de ánimo tranquilo y pacífico, perfecto para relajarse y meditar.",
    color: "var(--mo-mood-color-relaxed)",
    songs: [
      {
        id: uuidv4(),
        name: "Weightless",
        artist: "Marconi Union",
        genre: "Ambiental",
        year: 2011,
        duration: "8:00",
        youtubeId: "UfcAVejslrU"
      },
      {
        id: uuidv4(),
        name: "Cold Little Heart",
        artist: "Michael Kiwanuka",
        genre: "Chillout",
        year: 2016,
        duration: "9:58",
        youtubeId: "nOubjLM9Cbc"
      },
      {
        id: uuidv4(),
        name: "River Flows in You",
        artist: "Yiruma",
        genre: "Instrumental",
        year: 2001,
        duration: "3:08",
        youtubeId: "7maJOI3QMu0"
      },
      {
        id: uuidv4(),
        name: "In a Sentimental Mood",
        artist: "Duke Ellington & John Coltrane",
        genre: "Jazz",
        year: 1962,
        duration: "4:16",
        youtubeId: "sCQfTNOC5aE"
      },

      {
        id: uuidv4(),
        name: "Clair de Lune",
        artist: "Claude Debussy",
        genre: "Instrumental",
        year: 1890,
        duration: "5:00",
        youtubeId: "ea2WoUtbzuw"
      },

      {
        id: uuidv4(),
        name: "Sunset Lover",
        artist: "Petit Biscuit",
        genre: "Chillout",
        year: 2015,
        duration: "3:58",
        youtubeId: "4SZEDBFPpgw"
      },
      {
        id: uuidv4(),
        name: "Chill Lofi Beats Mix",
        artist: "Art Is Sound",
        genre: "Lo-Fi",
        year: 2025,
        duration: "1:42:54",
        youtubeId: "BCxTQq0UiFs"
      },
      {
        id: uuidv4(),
        name: "AUTUMN CHILL",
        artist: "the bootleg bog",
        genre: "Lo-Fi",
        year: 2021,
        duration: "18:12",
        youtubeId: "6me17gGZYRg"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Concentrado",
    img: "/assets/images/moods/focused_mood.webp",
    category: "neutral",
    genres: [
      "Clásica",
      "Instrumental",
      "Beats de Estudio",
      "Minimalista",
      "Electrónica"
    ],
    description:
      "Un estado de ánimo claro y determinado que ayuda con la productividad y la concentración.",
    color: "var(--mo-mood-color-focused)",
    songs: [
      {
        id: uuidv4(),
        name: "Time",
        artist: "Hans Zimmer",
        genre: "Instrumental",
        year: 2010,
        duration: "4:35",
        youtubeId: "Z0kGAz6HYM8"
      },
      {
        id: uuidv4(),
        name: "Interstellar",
        artist: "Hans Zimmer",
        genre: "Instrumental",
        year: 2025,
        duration: "2:03:43",
        youtubeId: "iVSUVmxDcls"
      },
      {
        id: uuidv4(),
        name: "Golden",
        artist: "Bogomolove",
        genre: "Electrónica",
        year: 2023,
        duration: "2:24",
        youtubeId: "q9ecEy4ea7s"
      },
      {
        id: uuidv4(),
        name: "No worries",
        artist: "Iona",
        genre: "Beats de estudio",
        year: 2025,
        duration: "2:21",
        youtubeId: "m7bE0JgjbFc"
      },
      {
        id: uuidv4(),
        name: "Release",
        artist: "Chillin",
        genre: "Beats de estudio",
        year: 2001,
        duration: "1:28",
        youtubeId: "30o1tF0cSWg"
      },
      {
        id: uuidv4(),
        name: "The More The Merrier",
        artist: "John Lee",
        genre: "Instrumental",
        year: 2025,
        duration: "2:56",
        youtubeId: "s80TUjSgTjg"
      },
      {
        id: uuidv4(),
        name: "8-Beat",
        artist: "Sam Cross",
        genre: "Ambiental",
        year: 2025,
        duration: "1:58",
        youtubeId: "kXq2-SvrKUU"
      },
      {
        id: uuidv4(),
        name: "Enlight",
        artist: "Devon Rea, Paklite & Littlehouse",
        genre: "Instrumental",
        year: 2025,
        duration: "2:16",
        youtubeId: "d6q7jueCOMs"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Enérgico",
    img: "/assets/images/moods/energetic_mood.webp",
    category: "positive",
    genres: ["Pop", "EDM", "Dance", "Electrónica"],
    description:
      "Un estado de ánimo lleno de vitalidad y energía para realizar tareas y lograr objetivos.",
    color: "var(--mo-mood-color-energetic)",
    songs: [
      {
        id: uuidv4(),
        name: "Overnight",
        artist: "Parcels",
        genre: "Dance",
        year: 2021,
        duration: "3:57",
        youtubeId: "-y9rkNXBuhg"
      },
      {
        id: uuidv4(),
        name: "Praise you",
        artist: "Fatboy Slim",
        genre: "Dance",
        year: 2010,
        duration: "3:46",
        youtubeId: "ruAi4VBoBSM"
      },
      {
        id: uuidv4(),
        name: "EMF",
        artist: "Unbelievable",
        genre: "Dance",
        year: 2015,
        duration: "3:43",
        youtubeId: "qPxEvN9OMGM"
      },
      {
        id: uuidv4(),
        name: "On Top of the World",
        artist: "Imagine Dragons",
        genre: "Pop-Rock",
        year: 2012,
        duration: "3:10",
        youtubeId: "w5tWYmIOWGk"
      },
      {
        id: uuidv4(),
        name: "Rockafeller Skank",
        artist: "Fatboy Slim",
        genre: "EDM",
        year: 2015,
        duration: "4:05",
        youtubeId: "FMrIy9zm7QY"
      },
      {
        id: uuidv4(),
        name: "Heads will Roll",
        artist: "A-Trak-Remix",
        genre: "EDM",
        year: 2019,
        duration: "6:23",
        youtubeId: "TDyG4YNUXcI"
      },
      {
        id: uuidv4(),
        name: "Dom Dolla",
        artist: "Saving Up",
        genre: "Dance",
        year: 2024,
        duration: "3:26",
        youtubeId: "yAl6yiQHHNw"
      },
      {
        id: uuidv4(),
        name: "David Guetta & Alesso",
        artist: "Never Going Home Tonight",
        genre: "Electrónica",
        year: 2024,
        duration: "2:43",
        youtubeId: "YOT5LoFuQfM"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Nostálgico",
    img: "/assets/images/moods/nostalgic_mood.webp",
    category: "negative",
    genres: ["Alternativa", "Indie", "Retro", "Clásica", "Folk"],
    description:
      "Un estado de ánimo melancólico con una sensación de recuerdo y añoranza del pasado.",
    color: "var(--mo-mood-color-nostalgic)",
    songs: [
      {
        id: uuidv4(),
        name: "Andy Warhol ",
        artist: "Dana Gillespie",
        genre: "Retro",
        year: 2016,
        duration: "2:55",
        youtubeId: "b11Jw8ddigI"
      },
      {
        id: uuidv4(),
        name: "Hang on to a Dream",
        artist: "GANDALF",
        genre: "Retro",
        year: 2014,
        duration: "4:19",
        youtubeId: "2AudTBMW_YU"
      },
      {
        id: uuidv4(),
        name: "Dolce Acqua",
        artist: "Delirium",
        genre: "Retro",
        year: 1971,
        duration: "5:51",
        youtubeId: "TYKhuNa33hc"
      },
      {
        id: uuidv4(),
        name: "Pavane for a Dead Princess",
        artist: "Eumir Deodato",
        genre: "Alternativa",
        year: 2017,
        duration: "4:06",
        youtubeId: "7_1EYiTgN_A"
      },
      {
        id: uuidv4(),
        name: "Willow´s Song",
        artist: "Paul Giovanni",
        genre: "Alternativa",
        year: 2024,
        duration: "4:42",
        youtubeId: "y2kpUdfULuQ"
      },
      {
        id: uuidv4(),
        name: "Leaf And Stream",
        artist: "Wishbone Ash",
        genre: "Alternativa",
        year: 2015,
        duration: "4:06",
        youtubeId: "ge31uyqrQSQ"
      },
      {
        id: uuidv4(),
        name: "Uma Vitamina Faz Favor",
        artist: "Pierre Cavalli",
        genre: "Alternativa",
        year: 2020,
        duration: "3:29",
        youtubeId: "M5uUssOQytA"
      },
      {
        id: uuidv4(),
        name: "Latte e Miele",
        artist: "Menestrello",
        genre: "Retro",
        year: 1976,
        duration: "5:15",
        youtubeId: "UhnjD6PXPe4"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Romántico",
    img: "/assets/images/moods/romantic_mood.webp",
    category: "positive",
    genres: ["R&B", "Soul", "Balada", "Pop", "Jazz"],
    description:
      "Un estado de ánimo cálido y amoroso, lleno de sentimientos y emociones románticas.",
    color: "var(--mo-mood-color-romantic)",
    songs: [
      {
        id: uuidv4(),
        name: "KESI",
        artist: "Camilo",
        genre: "Pop",
        year: 2021,
        duration: "2:57",
        youtubeId: "ZrUrwUwSHR0"
      },
      {
        id: uuidv4(),
        name: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop",
        year: 2017,
        duration: "4:23",
        youtubeId: "2Vv-BfVoq4g"
      },
      {
        id: uuidv4(),
        name: "Tacones Rojos",
        artist: "Sebastián Yatra",
        genre: "Pop",
        year: 2022,
        duration: "3:23",
        youtubeId: "Qz9gmiLBVFA"
      },
      {
        id: uuidv4(),
        name: "Formentera",
        artist: "Aitana, Nicki Nicole",
        genre: "Pop",
        year: 2022,
        duration: "3:31",
        youtubeId: "9YqlmvpWLUg"
      },
      {
        id: uuidv4(),
        name: "Kiss and Say Goodbye",
        artist: "The Manhattans",
        genre: "Soul",
        year: "1977",
        duration: "4:26",
        youtubeId: "wtjro7_R3-4"
      },
      {
        id: uuidv4(),
        name: "I Put a Spell On You",
        artist: "Seal",
        genre: "Soul",
        year: 2018,
        duration: "2:56",
        youtubeId: "X6GKHYFkVWo"
      },
      {
        id: uuidv4(),
        name: "My Loving",
        artist: "En vogue",
        genre: "R&B",
        year: 2023,
        duration: "4:42",
        youtubeId: "6zNPfCVhWFw"
      },
      ,
      {
        id: uuidv4(),
        name: "I Wanna be your lover",
        artist: "Prince",
        genre: "R&B",
        year: 1978,
        duration: "2:57",
        youtubeId: "Rp8WL621uGM"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Misterioso",
    img: "/assets/images/moods/mysterious_mood.webp",
    category: "neutral",
    genres: [
      "Experimental",
      "Alternativo",
      "Ambiental",
      "Indie",
      "Electrónica"
    ],
    description:
      "Un estado de ánimo intrigante y misterioso, asociado con lo desconocido y lo enigmático.",
    color: "var(--mo-mood-color-mysterious-arrow)",
    songs: [
      {
        id: uuidv4(),
        name: "Space Sound",
        artist: "Beach House",
        genre: "Indie",
        year: 2016,
        duration: "5:20",
        youtubeId: "RBtlPT23PTM"
      },
      {
        id: uuidv4(),
        name: "Ante Meridiem",
        artist: "Men I Trust",
        genre: "Indie",
        year: 2022,
        duration: "2:25",
        youtubeId: "HyA83z8N5BE"
      },
      {
        id: uuidv4(),
        name: "Intro",
        artist: "The XX",
        genre: "Alternativo",
        year: 2011,
        duration: "7:00",
        youtubeId: "veHqJSC-9Lo"
      },
      {
        id: uuidv4(),
        name: "No One Noticed",
        artist: "The Marías",
        genre: "Alternativo",
        year: 2024,
        duration: "3:55",
        youtubeId: "Qn8F_u0vBNI"
      },
      {
        id: uuidv4(),
        name: "Uptown Folks",
        artist: "DOPE LEMON",
        genre: "Indie",
        year: 2017,
        duration: "4:44",
        youtubeId: "MetXyUFY3Ts"
      },
      {
        id: uuidv4(),
        name: "Guitar",
        artist: "Alt-J",
        genre: "Experimental",
        year: 2014,
        duration: "1:17",
        youtubeId: "TqYDNCgsb-Q"
      },
      {
        id: uuidv4(),
        name: "Beach House",
        artist: "Master of None",
        genre: "Indie",
        year: 2023,
        duration: "3:19",
        youtubeId: "EmRBqX2xbNU"
      },
      {
        id: uuidv4(),
        name: "Bones",
        artist: "Crumb",
        genre: "Indie",
        year: 2016,
        duration: "3:15",
        youtubeId: "C2qpuKnK6gI"
      }
    ]
  }
];
