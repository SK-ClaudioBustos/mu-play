import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useFetch, { IitemData, IsearchQuery } from "../hooks/useFetch";
import ContentItem from "./ContentItem";

const styles = {
    box: {
        margin: "30px 0 70px 0",
        padding: "40px 0"
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
        padding: "0px"
    }
}

const ContentBox = async (props: IsearchQuery) => {
    const { searchQuery } = props;
    const dataFormateada = await useFetch({ searchQuery });
    return (
        <Box sx={styles.box}>
            <Grid container rowSpacing={6} columnSpacing={0}>
                {   dataFormateada &&
                    dataFormateada.map((item: IitemData, key: number) =>
                        <ContentItem key={key} artist={item.artist} song={item.song} image={item.image} />
                    )
                }
            </Grid>
        </Box>
    )
}

export default ContentBox