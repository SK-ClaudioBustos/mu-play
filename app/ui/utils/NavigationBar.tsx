"use client"

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import settings from '../data/items_settings_links';
import NavigationBarContent from './NavigationBarContent';
import nbstyle from './styles/navigationBar';

function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu: any = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <NavigationBarContent />
        <Box sx={nbstyle.box}>
          <Tooltip title="Mostrar opciones">
            <IconButton onClick={handleOpenUserMenu} sx={nbstyle.iconButton}>
              <Avatar alt="Claudio Bustos" src="img/profileDefault.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            open={Boolean(anchorElUser)}
            sx={nbstyle.menu}
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
            onClose={handleCloseUserMenu}
          >
            {
              settings.map(({ titulo, url }, key) => (
                <MenuItem key={key} onClick={handleCloseUserMenu}>
                  <Link href={url} style={nbstyle.settingsItem}>
                    <Typography textAlign="center">{titulo}</Typography>
                  </Link>
                </MenuItem>
              ))
            }
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default NavigationBar;


