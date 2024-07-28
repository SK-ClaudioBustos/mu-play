import { Container } from "@mui/material";
import BarraBusqueda from "../ui/components/BarraBusqueda";
import Section from "../ui/components/Section";
import data from "../ui/data/data_sections";

const Page = () => {
  return (
    <Container>
      <BarraBusqueda />
      <>
        {
          data.map((seccion_data, key) => (
            <Section seccion_name={seccion_data.section_name} items={seccion_data.items} key={key} />
          ))
        }
      </>
    </Container>
  )
}

export default Page