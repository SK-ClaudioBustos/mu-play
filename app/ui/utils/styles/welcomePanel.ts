import { color3 } from "./colors";

const wpStyle = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        display: "flex",
        flexDirection: "column"
    },
    littleBox: {
        backgroundColor: color3,
        borderRadius: "10px",
        width: "60vw",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        gap: "5%",
        padding: "1vw"
    }
}

export default wpStyle;