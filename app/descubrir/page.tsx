import { Container } from "@mui/material";
import BarraBusqueda from "../ui/components/BarraBusqueda";
import Section from "../ui/components/Section";
import { secciones } from '../ui/data/sections';

const Page = () => {
  return (
    <Container>
      <BarraBusqueda />
      <>
        {
          secciones.map((seccion, key) => (
            <Section title={seccion.title} content={seccion.content} key={key} />
          ))
        }
      </>
    </Container>
  )
}

export default Page