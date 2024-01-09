import { Avatar, Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import LabelCustom from "../ui/utils/LabelCustom";

const styles = {
  box: { padding: 10, backgroundColor: "#fff", margin: "20px 0", borderRadius: "5px", display: "flex", justifyContent: "center" },
  grid: { maxWidth: "500px" },
  avatar: { bgcolor: grey[500], height: 120, width: 120, marginBottom: "10px" }
}

const Page = () => {
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
      label: "Tipo de cuenta",
      text: "Premium"
    },
    {
      label: "Contraseña",
      text: "*********"
    },
    {
      label: "Correo Electrónico",
      text: "claudiobustos.sk2000@gmail.com"
    },
  ];
  return (
    <Box sx={styles.box}>
      <Grid container sx={styles.grid} spacing={0} rowSpacing={{ xs: 1, sm: 2, md: 6 }}>

        <Grid item xs={12} >
          <Avatar sx={styles.avatar} alt="Claudio Bustos" src="img/perfil.jpg" />
        </Grid>

        {
          items.map(({ label, text }, key) => (
            <Grid item xs={label === "Correo Electrónico" ? 12 : 6} key={key}>
              <LabelCustom primary={text} secondary={label} color={label === "Tipo de cuenta" ? "#ffc600" : "#000"} type={label === "Contraseña" ? "pass" : ""} />
            </Grid>
          ))
        }

      </Grid>
    </Box>
  )
}

export default Page