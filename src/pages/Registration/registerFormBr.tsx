import style from "./register.module.css"
import RegistrationFooter from "../../components/RegistrationFooter"
import RegistrationHeader from "../../components/RegistrationHeader";
import RegistrationForm from "../../components/RegistrationForm"

function registerFormBr() {
    
    return (
        <div className={style.master}>
            <RegistrationHeader language="pt"/>
            <section className={style.registerAccount}>
                <div className={style.register}>
                    <p className={style.formStep}>PASSO <strong>2</strong> DE <strong>3</strong></p>
                    <h4 className={style.titleStep}>Crie uma senha para iniciar sua assinatura</h4>
                    <h6 className={style.descriptionStep}>Faltam só mais alguns passos! <br />Nós também detestamos formulários.</h6>
                    <RegistrationForm language='pt'></RegistrationForm>
                </div>
            </section>
            <RegistrationFooter language='pt' languageStep="en2"/>
        </div>
    )
}

export default registerFormBr