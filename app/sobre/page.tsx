import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Page = () => {
  return (
    <Container>
      <Box sx={{ height: "400px", backgroundColor: "#0AAD74", margin: "20px 0", borderRadius: "5px", padding: "20px 80px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography fontSize={20}>
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
                  <ListItemText
                    primary="Next Js"
                    secondary="14.0.4"
                  />
                </ListItem>
            </List>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <FilterFramesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="React"
                    secondary="18"
                  />
                </ListItem>
            </List>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="MUI Component Library"
                    secondary="5.15.2"
                  />
                </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Page