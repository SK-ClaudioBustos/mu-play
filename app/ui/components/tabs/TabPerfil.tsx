import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"
import profileFields from "../../data/profileFields"
import LabelCustom from "../../utils/LabelCustom"
import Button from "@mui/material/Button"
import Image from 'next/image';
import CreateIcon from '@mui/icons-material/Create';

const styles = {
    item: {
        display: "flex",
        alignItems: "center"
    },
    containerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        borderRadius: "50%"
    }
}

export interface ITabProps {
    value: number
}

const TabPerfil = (props: ITabProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 0 ? "initial" : "none" }}>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={11}>
                            <Image alt="Imagen de perfil" width="100" height="100" src="/img/profileDefault.jpg" style={styles.avatar} />
                        </Grid>
                        <Grid item xs={1}>
                            <Box sx={styles.containerButton}>
                                <Tooltip title="Editar perfil">
                                    <Button startIcon={<CreateIcon />} color="secondary" />
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    profileFields.map(({ label, text }, key) => (
                        <Grid sx={styles.item} item xs={label === "Correo Electrónico" ? 12 : 6} key={key}>
                            <LabelCustom primary={text} secondary={label} colorP="#00613C" colorS="#1E9467" />
                        </Grid>
                    ))
                }
            </Grid>

        </Grid>
    )
}

export default TabPerfil