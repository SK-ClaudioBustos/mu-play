import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { IsearchParamsProps } from "../hooks/useFetch"
import ContentBox from "./ContentBox"

interface SectionProps {
    title: string
    content: IsearchParamsProps[]
}

const styles = {
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
            <Box sx={styles.box}>
                <Typography sx={styles.title} fontSize={35}>
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