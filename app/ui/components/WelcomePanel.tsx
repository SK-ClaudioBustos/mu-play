import { Container, Typography } from "@mui/material"

const styles = {
  container: {
    backgroundColor: "#fff",
    height: "500px",
    marginTop: "35px",
    marginBottom: "35px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(24,136,103,1) 60%, rgba(17,97,73,1) 100%)"
  },
  text: { 
    display: "block",
    color: "#fff"
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