"use client"

import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Button, Container, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ListaReproduccion from "../ui/components/ListaReproduccion";
import listas from '../ui/data/listas_reproduccion';
import mlEstilos from '../ui/utils/styles/misListas';

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
      <Box sx={mlEstilos.box}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item md={10} sm={12} xs={12}>
                <Typography variant='h4' sx={mlEstilos.title}>
                  Mis Listas de Reproducción
                </Typography>
              </Grid>
              <Grid item md={2} sm={12} xs={12} sx={mlEstilos.containerButton}>
                <Tooltip title="Agregar nueva lista de reproducción">
                  <Button onClick={handleShow} sx={mlEstilos.button} startIcon={<AddBoxIcon></AddBoxIcon>}>
                    Agregar
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} marginTop="0.7rem">
            <Grid container>
              {
                listas.map((lista: any, key: number) => (
                  <ListaReproduccion
                    nombre={lista.nombre}
                    starred={lista.starred}
                    imagen={lista.image}
                    key={key}
                    descripcion={lista.descripcion}
                  />
                ))
              }
            </Grid>
          </Grid>
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
      <Box sx={mlEstilos.modal}>
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
            <Box sx={mlEstilos.containerButton}>
              <Button color="success" onClick={handleClose}>
                Aceptar
              </Button>
              <Button color="primary" onClick={handleClose}>
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