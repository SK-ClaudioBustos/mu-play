"use client"

import { DataSong } from '@/app/descubrir/page'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { IconButton, Tooltip, useMediaQuery } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Image from 'next/image'
import { Dispatch, SetStateAction } from "react"
import LabelCustom from "../utils/LabelCustom"
import { color2 } from "../utils/styles/colors"
import ciStyle from "../utils/styles/contentItem"

interface ContentItemProps {
    song: string
    artist: string
    image: string
    setShowPlayer: Dispatch<SetStateAction<boolean>>
    setSongData: Dispatch<SetStateAction<DataSong>>
}

const ContentItem = (props: ContentItemProps) => {
    const {
        song,
        artist,
        image,
        setShowPlayer,
        setSongData
    } = props;
    const matches = useMediaQuery('(max-width:600px)');

    const handlePlay = () => {
        setSongData({
            artista: artist,
            cancion: song
        });
        setShowPlayer(true);
    }

    return (
        <Grid item md={6} sm={12} xs={12}>
            <Card sx={ciStyle.card}>
                <Grid container>
                    <Grid item sm={10} xs={12} sx={{ display: "flex", flexDirection: "row" }}>
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
                    {
                        matches
                            ? null
                            : (
                                <Grid item sm={2} xs={2} sx={{ display: "flex", alignItems: "center" }}>
                                    <IconButton>
                                        <Tooltip title="Reproducir">
                                            <PlayArrowIcon onClick={handlePlay} color="action" sx={{ fontSize: matches ? "4vw" : "1.6rem" }} />
                                        </Tooltip>
                                    </IconButton>
                                </Grid>
                            )
                    }

                </Grid>
            </Card>
        </Grid>
    )
}

export default ContentItem