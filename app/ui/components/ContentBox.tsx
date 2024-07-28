import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import cbStyle from "../utils/styles/contentBox";
import ContentItem from "./ContentItem";
import { ContentData } from "../data/data_sections";

interface ContentBoxProps {
    content: ContentData[];
}

const ContentBox = async (props: ContentBoxProps) => {
    const { content } = props;
    return (
        <Box sx={cbStyle.box}>
            <Grid container rowSpacing={6} columnSpacing={0}>
                {content.map((item: any, key: number) =>
                    <ContentItem key={key} artist={item.artist} song={item.song} image={item.image} />
                )
                }
            </Grid>
        </Box>
    )
}

export default ContentBox