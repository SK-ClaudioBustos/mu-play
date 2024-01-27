"use client"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from 'next/link';
import { MouseEvent, useState } from "react";
import { usePathname } from 'next/navigation'

const styles = {
    icon1: { color: "#96FAD4", display: { xs: 'none', md: 'flex' }, mr: 1 },
    typo1: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#96FAD4',
        textDecoration: 'none',
    },
    box1: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    link: { my: 2, color: '#41E0A3', display: 'block' },
    linkSelected: { my: 2, color: '#96FAD4', display: 'block' },
    box2: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
    menu: {
        display: { xs: 'block', md: 'none' }
    },
    icon2: { display: { xs: 'flex', md: 'none' }, mr: 1 },
    typo2: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#96FAD4',
        textDecoration: 'none',
    },
}

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
            <LibraryMusicIcon sx={styles.icon1} />
            <Typography
                variant="h6"
                noWrap
                sx={styles.typo1}
            >
                    MuPlay
            </Typography>
            <Box sx={styles.box1}>
                {pages.map(({titulo, url}) => (
                    <Link href={url} key={url}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={ url === pathname ? styles.linkSelected : styles.link }
                        >
                            {titulo}
                        </Button>
                    </Link>
                ))}
            </Box>

            <Box sx={styles.box2}>
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
                    sx={styles.menu}
                >
                    {pages.map(({titulo, url}) => (
                        <Link href={url} key={url}>
                            <MenuItem >
                                <Typography textAlign="center">{titulo}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Box>
            <LibraryMusicIcon sx={styles.icon2} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={styles.typo2}
            >
                MuPlay
            </Typography>
        </>
    )
}

export default NavigationBarContent;