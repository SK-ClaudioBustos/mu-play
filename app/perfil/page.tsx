"use client"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Box, Button, Container, Grid, IconButton, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SyntheticEvent, useState } from "react";
import LabelCustom from "../ui/utils/LabelCustom";
import tabs from '../ui/data/tabsSettings';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  box: {
    padding: "35px 0",
    backgroundColor: "#CCFFEB",
    margin: "80px 0",
    display: "flex",
    justifyContent: "center",
    width: "600px",
    maxHeight: "550px"
  },
  grid: { padding: "0px 80px", height: "500px" },
  item: { display: "flex", alignItems: "center" },
  avatar: {
    bgcolor: grey[500],
    height: 120,
    width: 120
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  deleteButton: { marginTop: "15px" },
  itemCuenta: { display: "flex", alignItems: "center", flexWrap: "wrap", borderRadius: "5px" }
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
                <Tab label="Seguridad" {...a11yProps(1)} />
                <Tab label="Cuenta" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container sx={styles.grid} rowSpacing={{ xs: 1, sm: 1, md: 1 }}>
              {
                value === 0 &&
                <Grid item xs={12}>

                  <Grid container rowSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Grid item xs={12} >
                      <Grid container>
                        <Grid item xs={11}>
                          <Avatar sx={styles.avatar} alt="Claudio Bustos" src="img/perfil.jpg" />
                        </Grid>
                        <Grid item xs={1}>
                          <Box sx={styles.containerButton}>
                            <Tooltip title="Editar perfil">
                              <Button startIcon={<CreateIcon />} color="secondary"/>
                            </Tooltip>
                          </Box>
                        </Grid>
                      </Grid>

                    </Grid>
                    {
                      tabs.map(({ label, text }, key) => (
                        <Grid sx={styles.item} item xs={label === "Correo Electrónico" ? 12 : 6} key={key}>
                          <LabelCustom primary={text} secondary={label} colorP="#00613C" colorS="#1E9467"/>
                        </Grid>
                      ))
                    }
                  </Grid>

                </Grid>
              }

              {
                value === 1 &&
                <Grid item xs={12}>

                  <Grid container>
                    <Grid sx={styles.item} item xs={12}>
                      <LabelCustom primary={"****************"} secondary={"Contraseña"} colorP="#00613C" colorS="#1E9467"/>
                      <IconButton>
                        <VisibilityIcon />
                      </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                      <Button sx={styles.deleteButton} variant="outlined" startIcon={<LockResetIcon />} color="success" >
                        Cambiar contraseña
                      </Button>
                    </Grid>

                  </Grid>

                </Grid>
              }

              {
                value === 2 &&
                <Grid item xs={12}>

                  <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                      <LabelCustom primary='No Premium' secondary='Tipo de cuenta' colorP="#00613C" colorS="#1E9467" />
                    </Grid>
                    <Grid item xs={12} sx={styles.itemCuenta}>
                      <Typography color="error" fontSize={20}>
                        Dar de baja mi Cuenta
                      </Typography>
                      <Typography fontSize={15} color="error">
                        Al dar de baja su cuenta la misma estará disponible
                        durante 30 días por si se arrepiente de su decision, luego de pasado los
                        30 días su cuenta será eliminada permanentemente.
                      </Typography>
                      <Button sx={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon />} color="error" >
                        Eliminar cuenta
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>
              }

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