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
      word: "Breaking Benjamin",
      count: 5,
    },
    {
      word: "Avenged Sevenfold",
      count: 8,
    }
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
    title: "Metal Alternativo",
    content: seccion1
  },
  {
    title: "Heavy Metal",
    content: seccion2
  },
];