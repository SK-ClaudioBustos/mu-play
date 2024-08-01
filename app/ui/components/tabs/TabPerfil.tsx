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
    matches: boolean
}

const TabPerfil = (props: ITabProps) => {
    const { value, matches } = props;

    const fs1 = "2.5vw";
    const fs2 = "1.5vw";
    const styleIcons = { fontSize: matches ? "2vw" : "1.5rem" };
    const styleButtonFont = { fontSize: matches ? fs1 : fs2 }

    return (
        <Grid item xs={12} sx={{ display: value === 1 ? "initial" : "none" }}>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 4 }}>

                <Grid item sm={12} xs={12}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Image
                                alt="Imagen de perfil"
                                width={matches ? "75" : "100"}
                                height={matches ? "75" : "100"}
                                src="/img/profileDefault.jpg"
                                style={tpStyle.avatar}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Box sx={tpStyle.containerButton}>
                                <Tooltip title="Editar perfil">
                                    <Button
                                        sx={styleIcons}
                                        startIcon={<CreateIcon />}
                                        color="secondary" />
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    profileFields.map(({ label, text }, key) => (
                        <Grid sx={tpStyle.item} item sm={6} xs={12} key={key}>
                            <LabelCustom
                                primary={text}
                                secondary={label}
                                colorP="#00613C"
                                colorS="#1E9467"
                                fs1={matches ? fs1 : fs2}
                                fs2={matches ? "2vw" : "1.3vw"}
                            />
                        </Grid>
                    ))
                }

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button color='info' sx={styleButtonFont} startIcon={<DiamondIcon sx={styleIcons} />}>
                                Cambiar a Premium
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="error" sx={styleButtonFont} startIcon={<DeleteIcon sx={styleIcons} />}>
                                Eliminar cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default TabPerfil