import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ContentData } from "../data/data_sections";
import cbStyle from "../utils/styles/contentBox";
import ContentItem from "./ContentItem";
import { Dispatch, SetStateAction } from "react"
import { DataSong } from "@/app/descubrir/page";

interface ContentBoxProps {
    content: ContentData[];
    setShowPlayer: Dispatch<SetStateAction<boolean>>
    setSongData: Dispatch<SetStateAction<DataSong>>
}

const ContentBox = (props: ContentBoxProps) => {
    const { content, setShowPlayer, setSongData } = props;
    return (
        <Box sx={cbStyle.box}>
            <Grid container rowSpacing={4} columnSpacing={4}>
                {
                    content.map((item: any, key: number) =>
                        <ContentItem setShowPlayer={setShowPlayer} setSongData={setSongData} key={key} artist={item.artist} song={item.song} image={item.image} />
                    )
                }
            </Grid>
        </Box>
    )
}

export default ContentBox