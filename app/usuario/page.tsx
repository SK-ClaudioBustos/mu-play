"use client"
import { Box, Container, Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import TabConfiguracion from "../ui/components/tabs/TabConfiguracion";
import TabPerfil from "../ui/components/tabs/TabPerfil";
import uStyle from "../ui/utils/styles/usuarioPage";

const getActualTab = (searchParams: ReadonlyURLSearchParams) => {
  if (searchParams.has("perfil")) return 1;
  return 0;
}

const Page = () => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState<number>(getActualTab(searchParams));
  const matches = useMediaQuery('(max-width:600px)');
  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container sx={uStyle.container}>
      <Box sx={uStyle.box}>
        <Grid container sx={uStyle.container} rowSpacing={5}>

          <Grid item xs={12}>
            <Box sx={uStyle.container}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="primary"
                indicatorColor="primary">
                <Tab label="Configuración" {...a11yProps(matches, 0)} />
                <Tab label="Perfil" {...a11yProps(matches, 1)} />
              </Tabs>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container sx={uStyle.grid} rowSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <TabConfiguracion matches={matches} value={value} />
              <TabPerfil matches={matches} value={value} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}


function a11yProps(matches: boolean, index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    sx: { fontSize: matches ? "2.5vw" : "1.2rem" }
  };
}

export default Page