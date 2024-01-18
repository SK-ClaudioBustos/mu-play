import { Container, Typography } from "@mui/material"

const styles = {
  container: {
    // backgroundColor: "#fff",
    height: "500px",
    marginTop: "35px",
    marginBottom: "35px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  text: { 
    display: "block",
    color: "#116149"
  }
}

const WelcomePanel = () => {
  return (
    <Container sx={styles.container}>
      <div>
      <Typography  sx={styles.text} fontSize={50}>
          Bienvenido a mi tercer proyecto
      </Typography>
      <Typography sx={styles.text} fontSize={15}>
          Se trata de un proyecto que busca simular ser una pagina web para escuchar musica
      </Typography>
      </div>
    </Container>
  )
}

export default WelcomePanel