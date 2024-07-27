import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useState } from "react";
import LabelCustom from "../utils/LabelCustom";
import lrStyle from '../utils/styles/listaReproduccion';

interface IListaReproduccionProps {
    nombre: string
    imagen: string
    starred: boolean
    descripcion?: string
}

const ListaReproduccion = (props: IListaReproduccionProps) => {
    const { nombre, imagen, starred, descripcion } = props;
    const [star, setStar] = useState(starred);
    return (
        <Grid item xs={12} sx={lrStyle.item}>
            <Grid container>
                <Grid item xs={2} sx={lrStyle.containerImage}>
                    <Image src={imagen} width={120} height={120} priority alt="portada lista de reproducion" />
                </Grid>
                <Grid item xs={8} sx={lrStyle.containerText}>
                    <Box>
                        <LabelCustom primary={nombre} secondary={descripcion as string} colorP="#00613C" colorS="#1E9467" altern={true} />
                    </Box>
                </Grid>
                <Grid item xs={2} sx={lrStyle.containerText}>
                    <IconButton>
                        <Tooltip title="Eliminar lista de reproducción">
                            <DeleteIcon color="error" />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={() => setStar(!star)}>
                        <Tooltip title={star ? "Desmarcar como favorita" : "Marcar como favorita"}>
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