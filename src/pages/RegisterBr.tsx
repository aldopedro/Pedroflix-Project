import style from "./Register.module.css"
import { useNavigate } from "react-router-dom"



function RegisterBr() {
    function backToHome () {
        return navigate ("/Pedroflix-Project/")
    }
    const navigate = useNavigate();
    return (
        <div>
            <header className={style.header}>
                <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
                <button className={style.headerButton} >Entrar</button>
            </header>
            <section className={style.registerAccount}>
                <div className={style.devices}></div>
                <p className={style.step}>PASSO <strong>1</strong> DE <strong>3</strong></p>
                <h4 className={style.stepTitle}>Termine de configurar sua conta</h4>
                <h6 className={style.stepDescription}>A Pedroflix é personalizada para você. Crie uma senha para começar a assistir à Pedroflix.</h6>
                <button>Próximo</button>
            </section>
        </div>
    )
} 
export default RegisterBr