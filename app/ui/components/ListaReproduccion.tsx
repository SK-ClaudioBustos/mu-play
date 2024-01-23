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

interface IListaReproduccionProps {
    nombre: string
    imagen: string
    starred: boolean
    descripcion?: string
}

const st = {
    item: {
        backgroundColor: "#54E8B0",
        padding: "0",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
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
        <Grid item xs={12} sx={st.item}>
            <Grid container>
                <Grid item xs={2} sx={st.containerImage}>
                    <Image src={imagen} width={120} height={120} priority alt="portada lista de reproducion" />
                </Grid>
                <Grid item xs={8} sx={st.containerText}>
                    <Box>
                        <LabelCustom primary={nombre} secondary={descripcion as string} colorP="#00613C" colorS="#1E9467" altern={true} />
                    </Box>
                </Grid>
                <Grid item xs={2} sx={st.containerText}>
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