"use client"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEvent, useState } from "react";
import nbcStyle from './styles/navigationBarContent';


const pages = [
    {
        titulo: 'Inicio',
        url: "/"
    },
    {
        titulo: 'Descubrir',
        url: "/descubrir"
    },
    {
        titulo: 'Mis Listas',
        url: "/mis-listas"
    },
    {
        titulo: 'Sobre',
        url: "/sobre"
    }
];

const NavigationBarContent = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const pathname = usePathname();
    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <LibraryMusicIcon sx={nbcStyle.icon1} />
            <Typography
                variant="h6"
                noWrap
                sx={nbcStyle.typo1}
            >
                MuPlay
            </Typography>
            <Box sx={nbcStyle.box1}>
                {pages.map(({ titulo, url }, key) => (
                    <Link href={url} key={key}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={url === pathname ? nbcStyle.linkSelected : nbcStyle.link}
                        >
                            {titulo}
                        </Button>
                    </Link>
                ))}
            </Box>

            <Box sx={nbcStyle.box2}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={nbcStyle.menu}
                >
                    {pages.map(({ titulo, url }) => (
                        <Link href={url} key={url}>
                            <MenuItem >
                                <Typography textAlign="center">{titulo}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Box>
            <LibraryMusicIcon sx={nbcStyle.icon2} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={nbcStyle.typo2}
            >
                MuPlay
            </Typography>
        </>
    )
}

export default NavigationBarContent;