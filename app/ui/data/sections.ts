export interface SectionContentData {
    word: string;
    count: number;
}

const seccion1: SectionContentData[] = [
    {
      word: "Linkin Park",
      count: 7,
    },
    {
      word: "Metallica",
      count: 5,
    },
    {
      word: "Avenged Sevenfold",
      count: 8,
    },
    {
      word: "Cannibal Corpse",
      count: 3,
    },
];

const seccion2: SectionContentData[] = [
  {
    word: "Judas Priest",
    count: 5,
  },
  {
    word: "W.A.S.P",
    count: 4,
  },
];

export const secciones = [
  {
    title: "Metal",
    content: seccion1
  },
  {
    title: "Heavy Metal",
    content: seccion2
  },
];