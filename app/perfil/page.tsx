"use client"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, Button, Container, Grid, Tab, Tabs, TextField, Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SyntheticEvent, useState } from "react";
import LabelCustom from "../ui/utils/LabelCustom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  box: {
    padding: "40px 0",
    backgroundColor: "#fff",
    margin: "80px 0",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    width: "600px",
    maxHeight: "600px"
  },
  grid: { padding: "0px 80px", height: "600px" },
  item: { display: "flex", alignItems: "center" },
  avatar: {
    bgcolor: grey[500],
    height: 120,
    width: 120
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
  },
  deleteButton: { marginTop: "15px" },
  itemCuenta: { display: "flex", alignItems: "center", flexWrap: "wrap", borderRadius: "5px" }
}

const items = [
  {
    label: "Nombre",
    text: "Claudio"
  },
  {
    label: "Apellido",
    text: "Bustos"
  },
  {
    label: "Telefonó",
    text: "+54 89034523"
  },
  {
    label: "Correo Electrónico",
    text: "claudiobustos.sk2000@gmail.com"
  },
];

const Page = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Grid container sx={styles.container} rowSpacing={3}>

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
                  <Box hidden={value !== 0} >
                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 4 }}>
                      <Grid item xs={12}>
                        <Box sx={styles.containerButton}>
                          <Tooltip title="Editar perfil">
                            <Button startIcon={<CreateIcon />} color="primary" />
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item xs={12} >
                        <Avatar sx={styles.avatar} alt="Claudio Bustos" src="img/perfil.jpg" />
                      </Grid>
                      {
                        items.map(({ label, text }, key) => (
                          <Grid sx={styles.item} item xs={label === "Correo Electrónico" ? 12 : 6} key={key}>
                            <LabelCustom primary={text} secondary={label} />
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Box>
                </Grid>
              }

              {
                value === 1 &&
                <Grid item xs={12}>
                  <Box hidden={value !== 1}>
                    <Grid container>
                      <Grid sx={styles.item} item xs={6}>
                        <LabelCustom primary={"****************"} secondary={"Contraseña"} />
                      </Grid>
                      <Grid sx={styles.item} item xs={6}>
                        <TextField color="success" variant="standard" label="Nueva Contraseña" autoComplete="off" />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              }

              {
                value === 2 &&
                <Grid item xs={12}>
                  <Box hidden={value !== 2}>
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
                  </Box>
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