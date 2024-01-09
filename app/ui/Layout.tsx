import FooterCustom from "./utils/FooterCustom"
import NavigationBar from "./components/NavigationBar"
import Container from "@mui/material/Container";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            <Container>
                {children}
            </Container>
            <FooterCustom />
        </>
    )
}

export default Layout