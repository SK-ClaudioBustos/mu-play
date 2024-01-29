import NotificationsIcon from '@mui/icons-material/Notifications';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DownloadIcon from '@mui/icons-material/Download';
import StyleIcon from '@mui/icons-material/Style';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const styles = {
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

interface ITabConfiguracionProps {
    value: number
}

const TabConfiguracion = (props: ITabConfiguracionProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 0 ? "flex" : "none", justifyContent: "center" }}>
            <List
                sx={styles.list}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton sx={styles.itemsConfiguracion}>
                    <ListItemIcon>
                        <PasswordIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cambiar contraseña" />
                </ListItemButton>

                <ListItemButton sx={styles.itemsConfiguracion}>
                    <ListItemIcon>
                        <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Administrar aplicaciones" />
                </ListItemButton>

                <ListItemButton sx={styles.itemsConfiguracion}>
                    <ListItemIcon>
                        <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Doble factor" />
                </ListItemButton>

                <ListItemButton sx={styles.itemsConfiguracion}>
                    <ListItemIcon>
                        <VisibilityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configuración de privacidad" />
                </ListItemButton>

                <ListItemButton sx={styles.itemsConfiguracion}>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configurar notificaciones" />
                </ListItemButton>

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
    )
}


export default TabConfiguracion