import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import footerStyle from "./styles/footer";

const FooterCustom = () => {
    return (
        <Box sx={footerStyle.box}>
            <Grid sx={footerStyle.grid} container spacing={0}>
                <Grid item xs={5} sm={6}>
                    <IconButton sx={footerStyle.iconButton}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={footerStyle.iconButton}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton sx={footerStyle.iconButton}>
                        <FacebookIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={7} sm={6} display={"flex"} justifyContent={"end"} alignItems={"center"}>
                    <Typography sx={footerStyle.text} >
                        Claudio Bustos(2024) &#169;
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FooterCustom