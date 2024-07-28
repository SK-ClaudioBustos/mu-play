import Box from "@mui/material/Box";
import FooterCustom from "./utils/FooterCustom";
import NavigationBar from "./utils/NavigationBar";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <Box>
            <NavigationBar />
            <Box minHeight={"100vh"} display={"flex"} alignItems={"center"}>
                {children}
            </Box>
            <FooterCustom />
        </Box>
    )
}

export default Layout