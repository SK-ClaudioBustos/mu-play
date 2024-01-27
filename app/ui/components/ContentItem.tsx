import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Image from 'next/image'
import LabelCustom from "../utils/LabelCustom"
import { IitemData } from "../hooks/useFetch"

const st = {
    grid: {
        display: "flex",
        justifyContent: "center"
    },
    card: {
        display: 'flex',
        width: "500px",
        backgroundColor: "#54E8B0"
    },
    box: {
        display: "flex",
        alignItems: "center"
    },
    content: { 
        flex: '1 0 auto'
    },
}

const ContentItem = (props: IitemData) => {
    const {
        song,
        artist,
        image,
    } = props;
    return (
        <Grid item xs={6} sx={st.grid}>
            <Card sx={st.card}>
                <Image
                    priority
                    height="151"
                    width="151"
                    alt="imagen de album"
                    src={image}
                />
                <Box sx={st.box}>
                    <CardContent sx={st.content}>
                        <LabelCustom primary={song || "---"} secondary={artist || "---"} colorP="#00613C" colorS="#1E9467"/>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default ContentItem