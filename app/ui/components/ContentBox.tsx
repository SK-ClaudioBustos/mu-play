import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useFetch, { IitemData, IsearchQuery } from "../hooks/useFetch";
import cbStyle from "../utils/styles/contentBox";
import ContentItem from "./ContentItem";

const ContentBox = async (props: IsearchQuery) => {
    const { searchQuery } = props;
    const dataFormateada = await useFetch({ searchQuery });
    return (
        <Box sx={cbStyle.box}>
            <Grid container rowSpacing={6} columnSpacing={0}>
                {dataFormateada &&
                    dataFormateada.map((item: IitemData, key: number) =>
                        <ContentItem key={key} artist={item.artist} song={item.song} image={item.image} />
                    )
                }
            </Grid>
        </Box>
    )
}

export default ContentBox