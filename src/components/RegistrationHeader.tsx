import style from "../pages/Registration/register.module.css"
import { useNavigate } from "react-router-dom"

function RegistrationHeader () {
    function backToHome () {
        return navigate ("/Pedroflix-Project/")
    }
    const navigate = useNavigate ();
    return (
        <header className={style.header}>
        <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
        <button className={style.headerButton} >Entrar</button>
    </header>
    )
}
export default RegistrationHeader