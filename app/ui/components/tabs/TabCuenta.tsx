import DeleteIcon from '@mui/icons-material/Delete';
import DiamondIcon from '@mui/icons-material/Diamond';
import DownloadIcon from '@mui/icons-material/Download';
import StyleIcon from '@mui/icons-material/Style';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Button, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
    typo: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#96FAD4',
        textDecoration: 'none',
    },
    itemsConfiguracion: {
        backgroundColor: '#CCFFEB',
        margin: "5px 0"
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'inherit',
        color: "#00613C"
    }
}

const TabCuenta = (props: ITabProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 2 ? "initial" : "none" }}>
            <Grid container rowSpacing={2}>
                <Grid item xs={6}>
                    <Typography>
                        Tu plan
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={styles.typo}
                    >
                        Muplay Free
                    </Typography>
                </Grid>

                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button  color='info' startIcon={<DiamondIcon />}>
                        Cambiar a Premium
                    </Button>
                </Grid>

                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <List
                        sx={styles.list}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton sx={styles.itemsConfiguracion}>
                            <ListItemIcon>
                                <StyleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Administrar tu plan" />
                        </ListItemButton>

                        <ListItemButton sx={styles.itemsConfiguracion}>
                            <ListItemIcon>
                                <VideoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Restaurar Playlists" />
                        </ListItemButton>
                        <ListItemButton sx={styles.itemsConfiguracion}>
                            <ListItemIcon>
                                <DownloadIcon />
                            </ListItemIcon>
                            <ListItemText primary="Descargar datos cuenta" />
                        </ListItemButton>

                    </List>
                </Grid>

                <Grid item xs={12} sx={styles.itemCuenta}>
                    <Typography color="error" fontSize={17}>
                        Dar de baja mi Cuenta
                    </Typography>
                    <Typography fontSize={15} color="error">
                        Al dar de baja su cuenta la misma estará disponible
                        durante 30 días por si se arrepiente de su decision, luego de pasado los
                        30 días su cuenta será eliminada permanentemente.
                    </Typography>
                    <Button sx={styles.deleteButton} startIcon={<DeleteIcon />} color="error" >
                        Eliminar cuenta
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TabCuenta