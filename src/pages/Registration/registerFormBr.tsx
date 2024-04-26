import style from "./register.module.css"
import RegistrationFooter from "../../components/RegistrationFooter"
import RegistrationHeader from "../../components/RegistrationHeader";
import RegistrationForm from "../../components/RegistrationForm"

function registerFormBr() {
    
    return (
        <div className={style.master}>
            <RegistrationHeader />
            <section className={style.registerAccount}>
                <div className={style.register}>
                    <p className={style.formStep}>PASSO <strong>1</strong> DE <strong>3</strong></p>
                    <h4 className={style.titleStep}>Crie uma senha para iniciar sua assinatura</h4>
                    <h6 className={style.descriptionStep}>Faltam só mais alguns passos! <br />Nós também detestamos formulários.</h6>
                    <RegistrationForm />
                </div>
            </section>
            <RegistrationFooter />
        </div>
    )
}

export default registerFormBr