import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ContentData } from "../data/data_sections"
import sectionStyle from "../utils/styles/section"
import ContentBox from "./ContentBox"
import { Dispatch, SetStateAction } from "react"
import { DataSong } from "@/app/descubrir/page"

interface SectionProps {
    seccion_name: string
    items: ContentData[];
    setShowPlayer: Dispatch<SetStateAction<boolean>>
    setSongData: Dispatch<SetStateAction<DataSong>>
}

const Section = (props: SectionProps) => {
    const { seccion_name, items, setShowPlayer, setSongData } = props;
    return (
        <>
            <Box sx={sectionStyle.box}>
                <Typography variant="h4" sx={sectionStyle.title}>
                    {seccion_name}
                </Typography>
            </Box>
            <ContentBox setShowPlayer={setShowPlayer} setSongData={setSongData} content={items} />
        </>
    )
}

export default Section