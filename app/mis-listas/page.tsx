import { Box, Button, Grid, Typography } from "@mui/material";
import ListaReproduccion from "../ui/components/ListaReproduccion";
import AddBoxIcon from '@mui/icons-material/AddBox';

const styles = {
  box: {
    padding: "25px",
    backgroundColor: "#fff",
    margin: "40px 0",
    borderRadius: "5px"
  },
  title: {
    marginBottom: "20px"
  },
  button: {
    color: "#116149"
  }
}

const listas = [
  {
    nombre: 'Work Music',
    descripcion: 'musica que escucho mientras trabajo',
    image: 'https://i.scdn.co/image/ab67616d00001e02cad4832cb7b5844343278daa'
  },
  {
    nombre: 'Gym Music',
    descripcion: 'buena musica para entrenar',
    image: 'https://i.scdn.co/image/ab67616d00001e02bc7ddb77993dd1d8d19c22a2'
  },
  {

    nombre: 'Peace',
    descripcion: 'musica relajante',
    image: 'https://i.scdn.co/image/ab67616d00001e021f9edf15e43f4c2f4938b869'
  },
  {
    nombre: 'Musica para limpiar',
    descripcion: '',
    image: 'https://i.scdn.co/image/ab67616d00001e0221fbdd09672c5f8bcfd66165'
  }
]

const Page = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.title} fontSize={50}>
        Listas de Reproducción
      </Typography>
      <Button sx={styles.button}startIcon={<AddBoxIcon></AddBoxIcon>}>
        Agregar
      </Button>
      <Grid container>
        <>
          {
            listas.map((lista: any, key: number) => (
              <ListaReproduccion nombre={lista.nombre} imagen={lista.image} key={key} descripcion={lista.descripcion} />
            ))
          }
        </>
      </Grid>
    </Box>
  )
}

export default Page