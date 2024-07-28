
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ILabelCustomProps {
    primary: string
    secondary?: string
    colorP?: string
    colorS?: string
    altern?: boolean
}

const styles = {
    box: {
        margin: 0,
        width: "75%",
        padding: 0,
    }
}

const LabelCustom = (props: ILabelCustomProps) => {
    const { primary, secondary = "", colorP = "#000", colorS = "#c1c2c3", altern = false } = props;
    return (
        <Box sx={styles.box}>
            <Typography fontSize={altern ? "1.6rem" : "1.1rem"} color={colorS}>
                {altern ? primary : secondary}
            </Typography>
            <Typography fontSize={altern ? "1.1rem" : "1.6rem"} color={colorP}>
                {altern ? secondary : primary}
            </Typography>
        </Box >
    )
}

export default LabelCustom