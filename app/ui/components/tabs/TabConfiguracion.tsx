import NotificationsIcon from '@mui/icons-material/Notifications';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DownloadIcon from '@mui/icons-material/Download';
import StyleIcon from '@mui/icons-material/Style';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import tcStyle from '../../utils/styles/tabConfiguracion';

interface ITabConfiguracionProps {
    value: number
}

const TabConfiguracion = (props: ITabConfiguracionProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 0 ? "flex" : "none", justifyContent: "center" }}>
            <List
                sx={tcStyle.list}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <PasswordIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cambiar contraseña" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Administrar aplicaciones" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Doble factor" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <VisibilityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configuración de privacidad" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configurar notificaciones" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <StyleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Administrar tu plan" />
                </ListItemButton>

                <ListItemButton sx={tcStyle.itemsConfiguracion}>
                    <ListItemIcon>
                        <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Restaurar Playlists" />
                </ListItemButton>
                <ListItemButton sx={tcStyle.itemsConfiguracion}>
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