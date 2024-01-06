import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useFetch, { itemData } from "../hooks/useFetch";
import ContentItem from "./ContentItem";

export interface IContentBox {
    word: string
    count: number
}

const ContentBox = async (props: IContentBox) => {
    const { word, count } = props;
    const dataFormateada = await useFetch({ word, count });
    return (
        <Box sx={{ backgroundColor: "#fff", borderRadius: "5px", margin: "30px 0 70px 0", padding: "40px 0" }}>

            <Grid container rowSpacing={2} columnSpacing={0}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginBottom: "10px", padding: "0px" }}>
                    <Typography fontSize={30}>
                        {word}
                    </Typography>
                </Grid>
                {
                    dataFormateada.map((item: itemData, key: number) =>
                        <ContentItem key={key} artist={item.artist} song={item.song} image={item.image} />
                    )
                }
            </Grid>
        </Box>
    )
}

export default ContentBox