"use client"
import { Container } from "@mui/material";
import wpStyle from "../utils/styles/welcomePanel";
import InitialBlock from "./InitialBlock";

const WelcomePanel = () => {

  return (
    <Container sx={wpStyle.container}>
      <InitialBlock />
    </Container>
  )
}

export default WelcomePanel