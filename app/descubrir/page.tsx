"use client"
import { Box, Container } from "@mui/material";
import { useState } from "react";
import BarraBusqueda from "../ui/components/BarraBusqueda";
import Player from "../ui/components/Player";
import Section from "../ui/components/Section";
import data from "../ui/data/data_sections";

export type DataSong = { artista: string; cancion: string; }

const Page = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [songData, setSongData] = useState<DataSong>({ artista: "", cancion: "" });
  return (
    <Container>
      <BarraBusqueda />
      <>
        {
          data.map((seccion_data, key) => (
            <Section setShowPlayer={setShowPlayer} setSongData={setSongData} seccion_name={seccion_data.section_name} items={seccion_data.items} key={key} />
          ))
        }
      </>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {
          showPlayer
            ? <Player songData={songData} setShowPlayer={setShowPlayer} />
            : null
        }
      </Box>
    </Container>
  )
}

export default Page