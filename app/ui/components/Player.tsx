"use client"
import { DataSong } from '@/app/descubrir/page';
import CloseIcon from '@mui/icons-material/Close';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import { Grid, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { color5 } from '../utils/styles/colors';


const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: 0.2,
});

interface Props {
    songData: DataSong
    setShowPlayer: Dispatch<SetStateAction<boolean>>
}

export default function Player(props: Props) {
    const { songData, setShowPlayer } = props;
    const media = useMediaQuery('(max-width:600px)');
    const [paused, setPaused] = React.useState(false);
    const Widget = styled('div')(({ theme }) => ({
        padding: "0.9rem",
        borderRadius: media ? 0 : 10,
        maxWidth: media ? "100%" : '80%',
        margin: 'auto',
        position: 'relative',
        zIndex: 10,
        backgroundColor: color5,
    }));
    return (
        <Box sx={{ width: '100%', position: "fixed", bottom: "0", marginBottom: media ? "0px" : "5px" }}>
            <Widget>
                <Grid container>
                    <Grid item sm={12} xs={12} display={"flex"} justifyContent={"space-between"}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ ml: 1.5, minWidth: 0 }}>
                                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                                    {`${songData.artista} - `} <b>{`${songData.cancion}`}</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box width={"40%"} display={"flex"} justifyContent={"space-between"}>
                            {
                                !media && (
                                    <>
                                        <Stack flexBasis={"100%"} spacing={2} direction="row" sx={{ px: 1 }} alignItems="center">
                                            <VolumeDownRounded fontSize='small' />
                                            <Slider
                                                aria-label="volumen"
                                                defaultValue={30}
                                                sx={{
                                                    color: 'rgba(0,0,0,0.87)',
                                                    '& .MuiSlider-track': {
                                                        border: 'none',
                                                    },
                                                    '& .MuiSlider-thumb': {
                                                        width: 15,
                                                        height: 15,
                                                        backgroundColor: '#fff',
                                                        '&::before': {
                                                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                                        },
                                                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                            boxShadow: 'none',
                                                        },
                                                    },
                                                }}
                                            />
                                            <VolumeUpRounded fontSize='small' />
                                        </Stack>
                                        <IconButton onClick={() => setShowPlayer(false)} sx={{ padding: "0px" }} aria-label="cerrar reproductor">
                                            <CloseIcon />
                                        </IconButton>
                                    </>
                                )
                            }
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12} sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: "-webkit-fill-available" }}>
                            <Slider
                                aria-label="indicador tiempo"
                                size="small"
                                value={0}
                                min={0}
                                step={1}
                                max={200}
                                sx={{
                                    color: 'rgba(0,0,0,0.87)',
                                    paddingBottom: 0,
                                    '& .MuiSlider-thumb': {
                                        width: 8,
                                        height: 8,
                                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                        '&::before': {
                                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                        },
                                        '&:hover, &.Mui-focusVisible': {
                                            boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)`,
                                        },
                                        '&.Mui-active': {
                                            width: 20,
                                            height: 20,
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        opacity: 0.28,
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    height: "0.9rem",
                                    marginTop: "5px"
                                }}
                            >
                                <TinyText>0:00</TinyText>

                                <Box>
                                    <IconButton aria-label="anterior cancion">
                                        <FastRewindRounded />
                                    </IconButton>
                                    <IconButton
                                        aria-label={paused ? 'reproducir' : 'pausar'}
                                        onClick={() => setPaused(!paused)}
                                    >
                                        {paused ? (
                                            <PlayArrowRounded />
                                        ) : (
                                            <PauseRounded />
                                        )}
                                    </IconButton>
                                    <IconButton aria-label="siguiente cancion">
                                        <FastForwardRounded />
                                    </IconButton>
                                </Box>
                                <TinyText>-3:20</TinyText>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Widget>
        </Box>
    );
}
