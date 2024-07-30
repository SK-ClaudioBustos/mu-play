
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ILabelCustomProps {
    primary: string
    secondary?: string
    colorP?: string
    colorS?: string
    altern?: boolean
    fs1?: string | null
    fs2?: string | null
}

const styles = {
    box: {
        margin: 0,
        width: "100%",
        padding: 0,
    }
}

const LabelCustom = (props: ILabelCustomProps) => {
    const { primary, secondary = "", fs1 = "1.6rem", fs2 = "1.1rem", colorP = "#000", colorS = "#c1c2c3", altern = false } = props;
    return (
        <Box sx={styles.box}>
            <Typography width={"fit-content"} fontSize={altern ? fs1 as string : fs2 as string} color={colorS}>
                {altern ? primary : secondary}
            </Typography>
            <Typography width={"fit-content"} fontSize={altern ? fs2 as string : fs1 as string} color={colorP}>
                {altern ? secondary : primary}
            </Typography>
        </Box >
    )
}

export default LabelCustom