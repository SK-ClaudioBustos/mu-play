import { IsearchParamsProps } from "../hooks/useFetch";

const seccion1: IsearchParamsProps[] = [
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

const seccion2: IsearchParamsProps[] = [
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