import { Box, Typography, useMediaQuery } from "@mui/material";
import { color1, color3 } from "../utils/styles/colors";
import wpStyle from "../utils/styles/welcomePanel";
import style from "./Welcome.module.css";


const InitialBlock = () => {
    const matches = useMediaQuery("(max-width:600px)");
    const pilars = ["90%", "80%", "70%", "60%", "50%", "40%", "30%", "20%", "10%"];
    return (
        <Box sx={wpStyle.box}>
            <Typography sx={{
                fontSize: "3rem",
                color: color3
            }}>MuPlay</Typography>
            <Box className={style.littleBox} sx={wpStyle.littleBox}>
                {
                    !matches ?
                        pilars.map((pilarHeight, key) => (
                            <Box key={key} className={style.pilar} sx={{
                                width: "10%",
                                borderRadius: "5px",
                                height: pilarHeight,
                                backgroundColor: color1,
                            }}></Box>
                        ))
                        :
                        pilars.slice(0, 5).map((pilarHeight,key) => (
                            <Box key={key} className={style.pilar} sx={{
                                width: "20%",
                                borderRadius: "5px",
                                height: pilarHeight,
                                backgroundColor: color1,
                            }}></Box>
                        ))
                }
            </Box>
        </Box>
    )
}

export default InitialBlock