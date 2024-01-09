import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from 'next/link';
import { MouseEvent, useState } from "react";

const styles = {
    icon1: { display: { xs: 'none', md: 'flex' }, mr: 1 },
    typo1: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    box1: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    link: { my: 2, color: 'white', display: 'block' },
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
        color: 'inherit',
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
        url: "descubrir"
    },
    {
        titulo: 'Mis Listas',
        url: "mis-listas"
    },
    {
        titulo: 'Sobre',
        url: "sobre"
    }
];

const NavigationBarContent = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
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
                <Link href="/">
                    MuPlay
                </Link>
            </Typography>
            <Box sx={styles.box1}>
                {pages.map(({titulo, url}) => (
                    <Link href={`/${url}`} key={url}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={ styles.link }
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
                        <Link href={`/${url}`} key={url}>
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