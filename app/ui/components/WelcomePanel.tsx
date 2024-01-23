import { Box, Container, Typography } from "@mui/material"

const styles = {
  container: {
    height: "500px",
    marginTop: "35px",
    marginBottom: "35px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#CCFFEB",
    borderRadius: "3px",
    height: "4px",
    width: "730px",
    marginBottom: "20px"
  },
  text: {
    display: "block",
    color: "#CCFFEB",
  }
}

const WelcomePanel = () => {
  return (
    <Container sx={styles.container}>
      <div>
        <Typography sx={styles.text} fontSize={50}>
          Bienvenido a mi tercer proyecto
        </Typography>
        <Box sx={styles.box} />
        <Typography sx={styles.text} fontSize={15}>
          Se trata de un proyecto que busca simular ser una pagina web para escuchar musica
        </Typography>
      </div>
    </Container>
  )
}

export default WelcomePanel