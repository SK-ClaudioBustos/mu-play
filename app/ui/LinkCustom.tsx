import Link from "next/link"

interface ILinkCustomProps {
    href: string
    style?: object
    children?: JSX.Element
}

const LinkCustom = (props: ILinkCustomProps) => {
    const { href, style, children } = props;
    return (
        <Link style={{ textDecoration: "none", ...style }} href={href} >
            {children}
        </Link>
    )
}

export default LinkCustom