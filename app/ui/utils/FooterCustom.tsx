import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const styles = {
    box: {
        width: "100%",
        height: "70px",
        backgroundColor: "#fff",
        padding: "0px"
    },
    grid: {
        padding: "15px",
        height: "100%"
    },
    iconButton: { 
        color: "#116149" 
    },
    text: {
        color: "#116149",
        textAlign: "end"
    }
}

const FooterCustom = () => {
    return (
        <Box sx={styles.box}>
            <Grid sx={styles.grid} container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <IconButton sx={styles.iconButton}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={styles.iconButton}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton sx={styles.iconButton}>
                        <FacebookIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={styles.text}>
                        Claudio Bustos(2024) &#169;
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FooterCustom