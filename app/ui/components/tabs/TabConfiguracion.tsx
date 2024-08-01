import DownloadIcon from '@mui/icons-material/Download';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StyleIcon from '@mui/icons-material/Style';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import tcStyle from '../../utils/styles/tabConfiguracion';

interface ITabConfiguracionProps {
    value: number
    matches: boolean
}

const TabConfiguracion = (props: ITabConfiguracionProps) => {
    const { value, matches } = props;
    const size = { fontSize: matches ? "2.5vw" : "1.2vw" };
    const listItems = [
        {
            label: "Cambiar contraseña",
            icon: <PasswordIcon sx={size} />
        },
        {
            label: "Administrar aplicaciones",
            icon: <PhoneIphoneIcon sx={size} />
        },
        {
            label: "Doble factor",
            icon: <VpnKeyIcon sx={size} />
        },
        {
            label: "Configuración de privacidad",
            icon: <VisibilityIcon sx={size} />
        },
        {
            label: "Configurar notificaciones",
            icon: <NotificationsIcon sx={size} />
        },
        {
            label: "Administrar tu plan",
            icon: <StyleIcon sx={size} />
        },
        {
            label: "Restaurar Playlists",
            icon: <VideoLibraryIcon sx={size} />
        },
        {
            label: "Descargar datos cuenta",
            icon: <DownloadIcon sx={size} />
        }
    ]
    return (
        <Grid item xs={12} sx={{ display: value === 0 ? "flex" : "none", justifyContent: "center" }}>
            <List
                sx={tcStyle.list}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {
                    listItems.map((item, key) => (
                        <ListItemButton sx={tcStyle.itemsConfiguracion} key={key}>
                            <ListItemIcon sx={{ minWidth: "6vw" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{ style: size }} primary={item.label} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Grid >
    )
}



export default TabConfiguracion