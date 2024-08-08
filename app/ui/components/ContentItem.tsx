"use client"

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { IconButton, Tooltip, useMediaQuery } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Image from 'next/image'
import { ContentData } from "../data/data_sections"
import LabelCustom from "../utils/LabelCustom"
import { color2 } from "../utils/styles/colors"
import ciStyle from "../utils/styles/contentItem"

const ContentItem = (props: ContentData) => {
    const {
        song,
        artist,
        image,
    } = props;
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Grid item md={6} sm={12} xs={12}>
            <Card sx={ciStyle.card}>
                <Grid container>
                    <Grid item sm={10} xs={10} sx={{ display: "flex", flexDirection: "row"}}>
                        <Image
                            priority
                            width={matches ? 90 : 150}
                            height={matches ? 90 : 150}
                            alt="imagen de album"
                            src={image}
                        />
                        <Box sx={ciStyle.box}>
                            <CardContent sx={ciStyle.content}>
                                <LabelCustom
                                    primary={song || "---"}
                                    secondary={artist || "---"}
                                    colorP={color2}
                                    colorS="#1E9467"
                                    fs1={matches ? "3.8vw" : "1.5rem"}
                                    fs2={matches ? "3.3vw" : "1.5rem"}
                                />
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item sm={2} xs={2} sx={{ display: "flex", alignItems: "center"}}>
                        <IconButton>
                            <Tooltip title="Reproducir">
                                <PlayArrowIcon color="action" sx={{ fontSize: matches ? "4vw" : "1.6rem" }} />
                            </Tooltip>
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default ContentItem