import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ContentBox from "./ContentBox"
import { SectionContentData } from "../data/sections"

interface SectionProps {
    title: string
    content: SectionContentData[]
}

const Section = (props: SectionProps) => {
    const { title, content } = props;
    return (
        <>
            <Box sx={{ backgroundColor: "#fff", borderRadius: "5px", paddingLeft: "10px", height: "70px", display: "flex", alignItems: "center", marginTop: "100px" }}>
                <Typography fontSize={35}>
                    {title}
                </Typography>
            </Box>
            <div>
                {
                    content.map((seccion, key) => (
                        <ContentBox count={seccion.count} word={seccion.word} key={key} />
                    ))
                }
            </div>
        </>
    )
}

export default Section