import style from "../pages/Registration/register.module.css"
import { useNavigate } from "react-router-dom"

interface Prop {
    language: string;
}

function RegistrationHeader (language:Prop) {
    function backToHome () {
        return navigate ("/Pedroflix-Project/")
    }
    const navigate = useNavigate ();

    if(language.language ==="pt") {
        return (
            <header className={style.header}>
            <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
            <button className={style.headerButton}>Entrar</button>
        </header>
        )

    } else 
    return (
        <header className={style.header}>
        <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
        <button className={style.headerButton}>Sign In</button>
    </header>
    )

}
export default RegistrationHeader