"use client"

import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Button, Container, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ListaReproduccion from "../ui/components/ListaReproduccion";
import listas from '../ui/data/listas_reproduccion';

const st = {
  box: {
    padding: "25px",
    margin: "60px 0",
  },
  title: {
    marginBottom: "20px",
    color: "#00613C"
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#50C799',
    padding: "10px 30px",
  }
}

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
      <Box sx={st.box}>
        <Grid container>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={st.title} fontSize={50}>
                  Listas de Reproducción
                </Typography>
              </Grid>
              <Grid item xs={6} sx={st.containerButton}>
                <Tooltip title="Agregar nueva lista de reproducción">
                  <Button onClick={handleShow} sx={st.button} startIcon={<AddBoxIcon></AddBoxIcon>}>
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
      <Box sx={st.modal}>
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
            <Box sx={st.containerButton}>
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