import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import { Box, Container, Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import LabelCustom from '../ui/utils/LabelCustom';

const st = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    maxHeight: "350px",
    maxWidth: "600px",
    margin: "70px 0",
    padding: "20px 80px",
  },
  description : {
    color: "#00613C"
  }
}

const Page = () => {
  return (
    <Container sx={st.container}>
      <Box sx={st.box}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={st.description} fontSize={20}>
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
                <LabelCustom primary="Next Js" secondary="14.0.4" colorP="#00613C" colorS="#1E9467" altern={true} />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FilterFramesIcon />
                </ListItemIcon>
                <LabelCustom primary="React" secondary="18" colorP="#00613C" colorS="#1E9467" altern={true} />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <LabelCustom primary="MUI Component Library" secondary="5.15.2" colorP="#00613C" colorS="#1E9467" altern={true} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Page