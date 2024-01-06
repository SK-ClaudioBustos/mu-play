import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import LabelCustom from "../utils/LabelCustom"
import Image from "next/image"

interface IContentItemProps {
    song: string
    artist: string
    image: string
    album?: string
}

const ContentItem = (props: IContentItemProps) => {
    const {
        song,
        artist,
        image,
        album
    } = props;
    return (
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                    <Image
                        priority
                        height="200"
                        width="200"
                        alt="imagen de album"
                        src={image}
                    />
                    <CardContent>
                        <LabelCustom primary={song || "---"} secondary={artist || "---"} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default ContentItem