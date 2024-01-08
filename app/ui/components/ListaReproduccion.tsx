import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
interface IListaReproduccionProps {
    nombre: string,
    imagen: string
    descripcion?: string
}

const styles = {
    item: {
        backgroundColor: "#E2E2E2",
        padding: "0",
        boxShadow: "3px 3px 7px 1px rgba(0, 0, 0, 0.2)",
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
    const { nombre, imagen, descripcion } = props;
    return (
        <Grid item xs={12} sx={styles.item}>
            <Grid container>
                <Grid item xs={2} sx={styles.containerImage}>
                    <Image src={imagen} width={120} height={120} priority alt="portada lista de reproducion" />
                </Grid>
                <Grid item xs={10} sx={styles.containerText}>
                    <Box>
                        <Typography fontSize={20}>{nombre}</Typography>
                        <Typography fontSize={16}>{descripcion}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ListaReproduccion