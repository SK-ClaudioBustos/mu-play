import { Box, Container, Typography } from "@mui/material"
import wpStyle from "../utils/styles/welcomePanel"

const WelcomePanel = () => {
  return (
    <Container sx={wpStyle.container}>
      <div>
        <Typography sx={wpStyle.text} fontSize={50}>
          Bienvenido a mi tercer proyecto
        </Typography>
        <Box sx={wpStyle.box} />
        <Typography sx={wpStyle.text} fontSize={15}>
          Se trata de un proyecto que busca simular ser una pagina web para escuchar musica
        </Typography>
      </div>
    </Container>
  )
}

export default WelcomePanel