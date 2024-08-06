import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ContentData } from "../data/data_sections"
import sectionStyle from "../utils/styles/section"
import ContentBox from "./ContentBox"

interface SectionProps {
    seccion_name: string
    items: ContentData[];
}

const Section = (props: SectionProps) => {
    const { seccion_name, items } = props;
    return (
        <>
            <Box sx={sectionStyle.box}>
                <Typography variant="h4" sx={sectionStyle.title}>
                    {seccion_name}
                </Typography>
            </Box>
            <ContentBox content={items} />
        </>
    )
}

export default Section