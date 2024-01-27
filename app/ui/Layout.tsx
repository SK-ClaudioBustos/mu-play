import FooterCustom from "./utils/FooterCustom"
import NavigationBar from "./utils/NavigationBar"
import Box from "@mui/material/Box";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            <Box>
                {children}
            </Box>
            <FooterCustom />
        </>
    )
}

export default Layout