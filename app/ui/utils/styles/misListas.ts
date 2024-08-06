import { color2, color4 } from "./colors";

const mlEstilos = {
    box: {
        padding: "25px",
        margin: "4rem 0",
    },
    title: {
        marginBottom: "0.3rem",
        color: color2,
    },
    containerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "end"
    },
    button: {
        color: "#116149"
    },
    modal: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: color4,
        padding: "10px 30px",
    }
};

export default mlEstilos;