import { Container } from "@mui/material";
import BarraBusqueda from "../ui/components/BarraBusqueda";
import ContentBox from "../ui/components/ContentBox";


const Page = () => {
  return (
    <Container>
      <BarraBusqueda />
      <div>
        <ContentBox count={10} word="Slipknot" />
      </div>
    </Container>
  )
}

export default Page