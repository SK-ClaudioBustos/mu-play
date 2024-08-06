import { Container, Typography } from "@mui/material"
import wpStyle from "../utils/styles/welcomePanel"

const WelcomePanel = () => {
  return (
    <Container sx={wpStyle.container}>
      <div>
        <Typography variant="h3" sx={wpStyle.title}>
          Bienvenido a mi tercer proyecto
        </Typography>
        <Typography variant="h5" sx={wpStyle.body}>
          Se trata de un proyecto que busca simular ser una pagina web para reproducir musica
        </Typography>
      </div>
    </Container>
  )
}

export default WelcomePanel