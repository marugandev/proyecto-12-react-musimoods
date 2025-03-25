import { v4 as uuidv4 } from "uuid";

export const moods = [
  {
    id: uuidv4(),
    name: "Feliz",
    img: "/src/assets/images/moods/happy_mood.webp",
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
        youtubeId: "ZbZSe6N_BXs",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        genre: "Pop",
        year: 2014,
        duration: "4:30",
        youtubeId: "OPf0YbXqDm0",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Wake Me Up",
        artist: "Avicii",
        genre: "Dance",
        year: 2013,
        duration: "4:07",
        youtubeId: "IcrbM1l_BoI",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Con Calma",
        artist: "Daddy Yankee & Snow ",
        genre: "Dance",
        year: 2019,
        duration: "3:30",
        youtubeId: "DiItGE3eAyQ"
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Triste",
    img: "/src/assets/images/moods/sad_mood.webp",
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
        youtubeId: "k4V3Mo61fJM",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Creep",
        artist: "Radiohead",
        genre: "Rock Alternativo",
        year: 1992,
        duration: "4:19",
        youtubeId: "XFkzRNyygfk",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "I Will Follow",
        artist: "Death Cab for Cutie",
        genre: "Indie",
        year: 2005,
        duration: "3:09",
        youtubeId: "NDHY1D0tKRA",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "All I Want",
        artist: "Kodaline",
        genre: "Indie",
        year: 2012,
        duration: "5:05",
        youtubeId: "mtf7hC17IBM",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Motivado",
    img: "/src/assets/images/moods/motivated_mood.webp",
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
        youtubeId: "btPJPFnesV4",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Don't Stop Believin'",
        artist: "Journey",
        genre: "Rock",
        year: 1981,
        duration: "4:11",
        youtubeId: "1k8craCGpgs",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Stronger",
        artist: "Kanye West",
        genre: "Electrónica",
        year: 2007,
        duration: "5:12",
        youtubeId: "PsO6ZnUZI0g",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Wake Me Up",
        artist: "Avicii",
        genre: "Electrónica",
        year: 2013,
        duration: "4:07",
        youtubeId: "IcrbM1l_BoI",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Relajado",
    img: "/src/assets/images/moods/relaxed_mood.webp",
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
        youtubeId: "UfcAVejslrU",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Cold Little Heart",
        artist: "Michael Kiwanuka",
        genre: "Chillout",
        year: 2016,
        duration: "9:58",
        youtubeId: "nOubjLM9Cbc",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Take Five",
        artist: "Dave Brubeck",
        genre: "Jazz",
        year: 1959,
        duration: "5:24",
        youtubeId: "vmDDOFXSgYk",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "An Ending (Ascent)",
        artist: "Brian Eno",
        genre: "Ambiental",
        year: 1983,
        duration: "4:17",
        youtubeId: "d1eKTR3vn4A",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Concentrado",
    img: "/src/assets/images/moods/focused_mood.webp",
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
        name: "The Four Seasons: Spring",
        artist: "Antonio Vivaldi",
        genre: "Clásica",
        year: 1725,
        duration: "10:00",
        youtubeId: "QF2WrbP_8GA",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Spiegel im Spiegel",
        artist: "Arvo Pärt",
        genre: "Minimalista",
        year: 1978,
        duration: "10:07",
        youtubeId: "lDi3oq0PTyQ",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Weightless Part 1",
        artist: "Marconi Union",
        genre: "Instrumental",
        year: 2011,
        duration: "8:00",
        youtubeId: "UfcAVejslrU",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Ambient 1: Music for Airports",
        artist: "Brian Eno",
        genre: "Electrónica",
        year: 1978,
        duration: "47:00",
        youtubeId: "6T7cMM27FuE",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Enérgico",
    img: "/src/assets/images/moods/energetic_mood.webp",
    category: "positive",
    genres: ["Pop", "EDM", "Dance", "Electrónica"],
    description:
      "Un estado de ánimo lleno de vitalidad y energía para realizar tareas y lograr objetivos.",
    color: "var(--mo-mood-color-energetic)",
    songs: [
      {
        id: uuidv4(),
        name: "Don't Stop the Music",
        artist: "Rihanna",
        genre: "Pop",
        year: 2007,
        duration: "4:27",
        youtubeId: "pyQtw6h6mhM",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Titanium",
        artist: "David Guetta ft. Sia",
        genre: "EDM",
        year: 2011,
        duration: "4:05",
        youtubeId: "I0p48fbiFu8",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        genre: "Funk/Pop",
        year: 2014,
        duration: "4:30",
        youtubeId: "OPf0YbXqDm0",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "I Gotta Feeling",
        artist: "The Black Eyed Peas",
        genre: "EDM",
        year: 2009,
        duration: "4:49",
        youtubeId: "uSD4vsh1zDA",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Nostálgico",
    img: "/src/assets/images/moods/nostalgic_mood.webp",
    category: "negative",
    genres: ["Alternativa", "Indie", "Retro", "Clásica", "Folk"],
    description:
      "Un estado de ánimo melancólico con una sensación de recuerdo y añoranza del pasado.",
    color: "var(--mo-mood-color-nostalgic)",
    songs: [
      {
        id: uuidv4(),
        name: "Yesterday",
        artist: "The Beatles",
        genre: "Indie",
        year: 1965,
        duration: "2:05",
        youtubeId: "Q_I5jpMtPqM",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Time After Time",
        artist: "Cyndi Lauper",
        genre: "Indie",
        year: 1983,
        duration: "3:59",
        youtubeId: "vVQy9gPz3L4",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "The Way We Were",
        artist: "Barbra Streisand",
        genre: "Retro",
        year: 1973,
        duration: "3:30",
        youtubeId: "rf0HhrDdd1I",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Summer of '69",
        artist: "Bryan Adams",
        genre: "Rock",
        year: 1984,
        duration: "3:34",
        youtubeId: "9fNfM_Z3R7g",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Romántico",
    img: "/src/assets/images/moods/romantic_mood.webp",
    category: "positive",
    genres: ["R&B", "Soul", "Balada", "Pop", "Jazz"],
    description:
      "Un estado de ánimo cálido y amoroso, lleno de sentimientos y emociones románticas.",
    color: "var(--mo-mood-color-romantic)",
    songs: [
      {
        id: uuidv4(),
        name: "All of Me",
        artist: "John Legend",
        genre: "R&B",
        year: 2013,
        duration: "4:30",
        youtubeId: "450p7goxZqg",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "We Belong Together",
        artist: "Mariah Carey",
        genre: "R&B",
        year: 2005,
        duration: "3:23",
        youtubeId: "0habxsuXWbY",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop",
        year: 2017,
        duration: "4:23",
        youtubeId: "2Vv-BfVoq4g",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Your Song",
        artist: "Elton John",
        genre: "Pop",
        year: 1970,
        duration: "4:00",
        youtubeId: "GlPLm0K4f94",
        favourite: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Misterioso",
    img: "/src/assets/images/moods/mysterious_mood.webp",
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
        name: "Windowlicker",
        artist: "Aphex Twin",
        genre: "Experimental",
        year: 1999,
        duration: "6:06",
        youtubeId: "n2hTcrl0d2Q",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "Black Skinhead",
        artist: "Kanye West",
        genre: "Hip Hop",
        year: 2013,
        duration: "3:08",
        youtubeId: "krKpU6A4Xr4",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "The Host of Seraphim",
        artist: "Dead Can Dance",
        genre: "World Music",
        year: 1988,
        duration: "6:18",
        youtubeId: "bZJlNzpM4C4",
        favourite: false
      },
      {
        id: uuidv4(),
        name: "The Killing Moon",
        artist: "Echo & The Bunnymen",
        genre: "Post-punk",
        year: 1984,
        duration: "5:45",
        youtubeId: "WxGRf5qv9uA",
        favourite: false
      }
    ]
  }
];
