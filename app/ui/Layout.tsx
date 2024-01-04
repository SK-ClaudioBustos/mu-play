import FooterCustom from "./components/FooterCustom"
import NavigationBar from "./components/NavigationBar"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <>
            <NavigationBar />
            {children}
            <FooterCustom />
        </>
    )
}

export default Layout