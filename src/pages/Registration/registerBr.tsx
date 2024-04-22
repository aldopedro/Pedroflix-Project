import style from "./register.module.css"
import { useNavigate } from "react-router-dom"
import RegistrationFooter from "../../components/RegistrationFooter"


function registerBr() {
    function backToHome () {
        return navigate ("/Pedroflix-Project/")
    }
    function nextStep () {
        return navigate ("/Pedroflix-Project/register-br/regform")
    }
    const navigate = useNavigate();
    return (
        <div className={style.master}>
            <header className={style.header}>
                <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
                <button className={style.headerButton} >Entrar</button>
            </header>
            <section className={style.registerAccount}>
                <div className={style.devices}></div>
                <p className={style.step}>PASSO <strong>1</strong> DE <strong>3</strong></p>
                <h4 className={style.stepTitle}>Termine de configurar sua conta</h4>
                <h6 className={style.stepDescription}>A Pedroflix é personalizada para você. Crie uma senha para começar a assistir à Pedroflix.</h6>
                <button className={style.stepButton} onClick={nextStep} >Próximo</button>
            </section>
            <RegistrationFooter />
        </div>
    )
} 
export default registerBr