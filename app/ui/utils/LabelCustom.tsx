
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
    box: { margin: 0, padding: 0 }
}
const LabelCustom = (props: ILabelCustomProps) => {
    const { primary, secondary="", colorP, colorS, altern } = props;
    return (
        <Box sx={styles.box}>

            {
                altern
                    ? (
                        <>
                            <Typography fontSize={20} color={colorP || "#000"}>
                                {primary}
                            </Typography>
                            <Typography fontSize={13} color={colorS || "#c1c2c3"}>
                                {secondary}
                            </Typography>
                        </>
                    )
                    : (
                        <>
                            <Typography fontSize={13} color={colorS || "#c1c2c3"}>
                                {secondary}
                            </Typography>
                            <Typography fontSize={20} color={colorP || "#000"}>
                                {primary}
                            </Typography>
                        </>
                    )
            }

        </Box >
    )
}

export default LabelCustom