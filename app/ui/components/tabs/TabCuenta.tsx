import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, Typography } from "@mui/material";
import { ITabProps } from './TabPerfil';

const styles = {
    deleteButton: {
        marginTop: "15px"
    },
    itemCuenta: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        borderRadius: "5px"
    },
}

const TabCuenta = (props: ITabProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 2 ? "initial" : "none" }}>
            <Grid container rowSpacing={2}>
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
            </Grid>
        </Grid>
    )
}

export default TabCuenta