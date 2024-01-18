"use client"

import { Box, Button, ButtonGroup, Container, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material";
import ListaReproduccion from "../ui/components/ListaReproduccion";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from "react";

const styles = {
  box: {
    padding: "25px",
    backgroundColor: "#eee",
    margin: "60px 0",
    borderRadius: "5px"
  },
  title: {
    marginBottom: "20px"
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
  },
  button: {
    color: "#116149"
  },
  modal: {
    position: 'absolute' as 'absolute',
    borderRadius: "5px",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#eee',
    p: 2,
  }
}

const listas = [
  {
    nombre: 'Work Music',
    descripcion: 'musica que escucho mientras trabajo',
    image: 'https://i.scdn.co/image/ab67616d00001e02cad4832cb7b5844343278daa',
    starred: false
  },
  {
    nombre: 'Gym Music',
    descripcion: 'buena musica para entrenar',
    image: 'https://i.scdn.co/image/ab67616d00001e02bc7ddb77993dd1d8d19c22a2',
    starred: true
  },
  {

    nombre: 'Peace',
    descripcion: 'musica relajante',
    image: 'https://i.scdn.co/image/ab67616d00001e021f9edf15e43f4c2f4938b869',
    starred: true
  },
  {
    nombre: 'Musica para limpiar',
    descripcion: '',
    image: 'https://i.scdn.co/image/ab67616d00001e0221fbdd09672c5f8bcfd66165',
    starred: false
  }
]

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleShow = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container>
      <Box sx={styles.box}>
        <Grid container>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={styles.title} fontSize={50}>
                  Listas de Reproducción
                </Typography>
              </Grid>
              <Grid item xs={6} sx={styles.containerButton}>
                <Tooltip title="Agregar nueva lista de reproducción">
                  <Button onClick={handleShow} sx={styles.button} startIcon={<AddBoxIcon></AddBoxIcon>}>
                    Agregar
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <>
            {
              listas.map((lista: any, key: number) => (
                <ListaReproduccion nombre={lista.nombre} starred={lista.starred} imagen={lista.image} key={key} descripcion={lista.descripcion} />
              ))
            }
          </>
        </Grid>
        {
          open &&
          <ModalCustom open={open} handleClose={handleClose} />
        }
      </Box>
    </Container>
  )
}

interface IModalCustomProps {
  open: boolean
  handleClose: () => void
}

const ModalCustom = (props: IModalCustomProps) => {
  const { open, handleClose } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Typography>
              Crear Lista de Reproducción
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth color="success" variant="standard" label="Nombre" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth color="success" variant="standard" label="Descripción" />
          </Grid>
          <Grid item xs={12}>
            <Box sx={styles.containerButton}>
              <Button color="success" onClick={handleClose}>
                Aceptar
              </Button>
              <Button color="error" onClick={handleClose}>
                Cancelar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default Page