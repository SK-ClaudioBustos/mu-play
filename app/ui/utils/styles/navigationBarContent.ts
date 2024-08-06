import { color3 } from "./colors";

const nbcStyle = {
    icon1: { color: color3, display: { xs: 'none', md: 'flex' }, mr: 1 },
    typo1: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: color3,
        textDecoration: 'none',
    },
    box1: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    link: { my: 2, color: '#41E0A3', display: 'block' },
    linkSelected: { my: 2, color: color3, display: 'block' },
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
        color: color3,
        textDecoration: 'none',
    },
}

export default nbcStyle;