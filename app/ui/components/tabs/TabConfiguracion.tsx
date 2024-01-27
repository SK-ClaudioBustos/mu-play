import NotificationsIcon from '@mui/icons-material/Notifications';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ITabProps } from './TabPerfil';

const styles = {
    itemsConfiguracion: {
        backgroundColor: '#CCFFEB',
        margin: "5px 0"
    }
}

const TabConfiguracion = (props: ITabProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 1 ? "flex" : "none", justifyContent: "center" }}>
            <List
                sx={{ width: '100%', maxWidth: 360, backgroundColor: 'inherit', color: "#00613C" }}
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

            </List>
        </Grid>
    )
}

export default TabConfiguracion