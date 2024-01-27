"use client"
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPerfil from "../ui/components/tabs/TabPerfil";
import TabConfiguracion from "../ui/components/tabs/TabConfiguracion";
import TabCuenta from "../ui/components/tabs/TabCuenta";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  box: {
    padding: "35px 0",
    backgroundColor: "#54E8B0",
    margin: "80px 0",
    display: "flex",
    justifyContent: "center",
    width: "600px",
    maxHeight: "550px"
  },
  grid: {
    padding: "0px 80px",
    height: "500px"
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}

const Page = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Grid container sx={styles.container} rowSpacing={5}>

          <Grid item xs={12}>
            <Box sx={styles.container}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="inherit"
                indicatorColor="primary">
                <Tab label="Perfil" {...a11yProps(0)} />
                <Tab label="Configuración" {...a11yProps(1)} />
                <Tab label="Cuenta" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container sx={styles.grid} rowSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <TabPerfil value={value}/>
              <TabConfiguracion value={value}/>
              <TabCuenta value={value}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Page