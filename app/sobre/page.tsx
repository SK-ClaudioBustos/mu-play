import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import { Box, Container, Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import LabelCustom from '../ui/utils/LabelCustom';
import sobreStyle from '../ui/utils/styles/sobrePage';
import { color2 } from '../ui/utils/styles/colors';

const Page = () => {
  const fs1 = "0.9rem";
  const fs2 = "0.8rem";

  return (
    <Container sx={sobreStyle.container}>
      <Grid container sx={sobreStyle.box}>
          <Grid item xs={12}>
            <Typography sx={sobreStyle.description}>
              Esta pagina fue creada como un proyecto mas complejo que los anteriores, utilize muchas tecnologias aprendidas
              durante mi pasantía en el Ministerio Publico Fiscal, entre ellas estan:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChangeHistoryIcon />
                </ListItemIcon>
                <LabelCustom
                  primary="Next Js"
                  secondary="14.0.4"
                  colorP={color2}
                  colorS="#1E9467"
                  altern={true}
                  fs1={fs1}
                  fs2={fs2}
                />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FilterFramesIcon />
                </ListItemIcon>
                <LabelCustom
                  primary="React"
                  secondary="18"
                  colorP={color2}
                  colorS="#1E9467"
                  altern={true}
                  fs1={fs1}
                  fs2={fs2}
                />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <LabelCustom
                  primary="MUI Component Library"
                  secondary="5.15.2"
                  colorP={color2}
                  colorS="#1E9467"
                  altern={true}
                  fs1={fs1}
                  fs2={fs2}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Page