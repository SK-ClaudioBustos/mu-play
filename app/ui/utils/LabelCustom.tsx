
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ILabelCustomProps {
    primary: string
    secondary: string
    color?: string
}

const styles = {
   box: { margin: 0, padding: 0 }
}
const LabelCustom = (props: ILabelCustomProps) => {
    const { primary, secondary, color } = props;
    return (
        <Box sx={styles.box}>
            <Typography fontSize={13} color={"#c1c2c3"}>
                {secondary}
            </Typography>
            <Typography fontSize={20} color={color || "#000"}>
                {primary}
            </Typography>
        </Box>
    )
}

export default LabelCustom