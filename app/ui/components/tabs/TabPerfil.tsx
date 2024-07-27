import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'
import DiamondIcon from '@mui/icons-material/Diamond'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"
import Image from 'next/image'
import profileFields from "../../data/profileFields"
import LabelCustom from "../../utils/LabelCustom"
import tpStyle from '../../utils/styles/tabPerfil'

export interface ITabProps {
    value: number
}

const TabPerfil = (props: ITabProps) => {
    const { value } = props;
    return (
        <Grid item xs={12} sx={{ display: value === 1 ? "initial" : "none" }}>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={11}>
                            <Image alt="Imagen de perfil" width="100" height="100" src="/img/profileDefault.jpg" style={tpStyle.avatar} />
                        </Grid>
                        <Grid item xs={1}>
                            <Box sx={tpStyle.containerButton}>
                                <Tooltip title="Editar perfil">
                                    <Button startIcon={<CreateIcon />} color="secondary" />
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    profileFields.map(({ label, text }, key) => (
                        <Grid sx={tpStyle.item} item xs={6} key={key}>
                            <LabelCustom primary={text} secondary={label} colorP="#00613C" colorS="#1E9467" />
                        </Grid>
                    ))
                }
                <Grid item xs={6}>
                    <LabelCustom primary={"Muplay Free"} secondary={"Tu plan"} colorP="#00613C" colorS="#1E9467" />
                </Grid>

                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button color='info' startIcon={<DiamondIcon />}>
                        Cambiar a Premium
                    </Button>
                </Grid>

                <Grid item xs={12} sx={tpStyle.itemCuenta}>
                    <Button startIcon={<DeleteIcon />} color="error" >
                        Eliminar cuenta
                    </Button>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default TabPerfil