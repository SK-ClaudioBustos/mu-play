import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { IsearchParamsProps } from "../hooks/useFetch"
import ContentBox from "./ContentBox"
import sectionStyle from "../utils/styles/section"

interface SectionProps {
    title: string
    content: IsearchParamsProps[]
}

const Section = (props: SectionProps) => {
    const { title, content } = props;
    return (
        <>
            <Box sx={sectionStyle.box}>
                <Typography sx={sectionStyle.title} fontSize={35}>
                    {title}
                </Typography>
            </Box>
            <div>
                <ContentBox searchQuery={content}/>
            </div>
        </>
    )
}

export default Section