import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ContentBox from "./ContentBox"
import { SectionContentData } from "../data/sections"

interface SectionProps {
    title: string
    content: SectionContentData[]
}

const st = {
    box: {
        paddingLeft: "10px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        marginTop: "100px"
    },
    title: {
        color: "#00613C"
    }
}

const Section = (props: SectionProps) => {
    const { title, content } = props;
    return (
        <>
            <Box sx={st.box}>
                <Typography sx={st.title} fontSize={35}>
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