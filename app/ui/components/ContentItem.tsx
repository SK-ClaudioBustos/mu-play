import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Image from 'next/image'
import { ContentData } from "../data/data_sections"
import LabelCustom from "../utils/LabelCustom"
import ciStyle from "../utils/styles/contentItem"

const ContentItem = (props: ContentData) => {
    const {
        song,
        artist,
        image,
    } = props;
    return (
        <Grid item md={6} sm={12} xs={12}>
            <Card sx={ciStyle.card}>
                <Image
                    priority
                    height="150"
                    width="150"
                    alt="imagen de album"
                    src={image}
                />
                <Box sx={ciStyle.box}>
                    <CardContent sx={ciStyle.content}>
                        <LabelCustom primary={song || "---"} secondary={artist || "---"} colorP="#00613C" colorS="#1E9467" />
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default ContentItem