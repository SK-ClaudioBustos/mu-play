import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import sectionStyle from "../utils/styles/section"
import ContentBox from "./ContentBox"
import { ContentData } from "../data/data_sections"

interface SectionProps {
    seccion_name: string
    items: ContentData[];
}

const Section = (props: SectionProps) => {
    const { seccion_name, items } = props;
    return (
        <>
            <Box sx={sectionStyle.box}>
                <Typography sx={sectionStyle.title} fontSize={35}>
                    {seccion_name}
                </Typography>
            </Box>
            <div>
                <ContentBox content={items} />
            </div>
        </>
    )
}

export default Section