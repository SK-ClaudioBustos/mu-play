import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box, Container, Typography } from "@mui/material";
import BarraBusqueda from "../ui/components/BarraBusqueda";
import Section from "../ui/components/Section";
import { secciones } from '../ui/data/sections';



const Page = () => {
  return (
    <Container>
      <BarraBusqueda />
      <Box sx={{ backgroundColor: "rgba(24,136,103,1)", color: "#fff", height: "250px", margin: "40px 0 20px 0", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography fontSize={50}>
          <MusicNoteIcon fontSize="inherit" />
          Canciones más escuchadas
        </Typography>
      </Box>
      <>
        {
          secciones.map((seccion, key) => (
            <Section title={seccion.title} content={seccion.content} key={key}/>
          ))
        }
      </>
    </Container>
  )
}

export default Page