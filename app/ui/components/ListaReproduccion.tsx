import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Image from "next/image";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

interface IListaReproduccionProps {
    nombre: string
    imagen: string
    starred: boolean
    descripcion?: string
}

const styles = {
    item: {
        backgroundColor: "#E2E2E2",
        padding: "0",
        // boxShadow: "3px 3px 7px 1px rgba(0, 0, 0, 0.2)",
        margin: "10px 0"
    },
    containerImage: {
        display: "flex",
        justifyContent: "center"
    },
    containerText: {
        display: "flex",
        alignItems: "center"
    }
}

const ListaReproduccion = (props: IListaReproduccionProps) => {
    const { nombre, imagen, starred, descripcion } = props;
    const [star, setStar] = useState(starred);
    return (
        <Grid item xs={12} sx={styles.item}>
            <Grid container>
                <Grid item xs={2} sx={styles.containerImage}>
                    <Image src={imagen} width={120} height={120} priority alt="portada lista de reproducion" />
                </Grid>
                <Grid item xs={8} sx={styles.containerText}>
                    <Box>
                        <Typography fontSize={20}>{nombre}</Typography>
                        <Typography fontSize={16}>{descripcion}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} sx={styles.containerText}>
                    <IconButton>
                        <Tooltip title="Eliminar lista de reproducción">
                            <DeleteIcon color="error" />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={() => setStar(!star)}>
                        <Tooltip title={ star ? "Desmarcar como favorita" : "Marcar como favorita" }>
                            {
                                star
                                    ? <StarIcon color="success" />
                                    : <StarBorderIcon color="success" />

                            }
                        </Tooltip>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ListaReproduccion