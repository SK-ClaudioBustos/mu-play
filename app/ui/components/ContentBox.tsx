import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContentItem from "./ContentItem";
import useFetch, { itemData } from "../hooks/useFetch";

export interface IContentBox {
    word: string
    count: number
}

const ContentBox = async (props: IContentBox) => {
    const { word, count } = props;
    const dataFormateada = await useFetch({ word, count });
    return (
        <Box sx={{ backgroundColor: "#fff", borderRadius: "5px", margin: "40px 0", padding: "40px 0" }}>
            <Grid container rowSpacing={2} columnSpacing={0}>
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