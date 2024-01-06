"use client"

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import LinkCustom from '../utils/LinkCustom';
import NavigationBarContent from './NavigationBarContent';
import { useState, MouseEvent } from 'react';

const styles = {
  appbar: { backgroundColor: "#116149" },
  box: { flexGrow: 0 },
  menu: { mt: '45px' },
  iconButton: { p: 0 }
}

const settings = [
  {
    titulo: 'Perfil',
    url: "perfil"
  },
  {
    titulo: 'Cerrar Sesión',
    url: "#"
  }
];

function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={styles.appbar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavigationBarContent />
          <Box sx={styles.box}>
            <Tooltip title="Mostrar opciones">
              <IconButton onClick={handleOpenUserMenu} sx={styles.iconButton}>
                <Avatar alt="Claudio Bustos" src="img/perfil.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={styles.menu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                settings.map(({ titulo, url }) => (
                  <MenuItem key={url} onClick={handleCloseUserMenu}>
                    <LinkCustom href={`/${url}`} style={{ color: "#000"}}>
                      <Typography textAlign="center">{titulo}</Typography>
                    </LinkCustom>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;


