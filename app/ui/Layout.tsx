import FooterCustom from "./FooterCustom"
import NavigationBar from "./NavigationBar"

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