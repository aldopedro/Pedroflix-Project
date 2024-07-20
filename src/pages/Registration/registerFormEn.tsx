import style from "./register.module.css"
import RegistrationFooter from "../../components/RegistrationFooter"
import RegistrationHeader from "../../components/RegistrationHeader";

function registerFormBr() {

    return (
        <div className={style.master}>
            <RegistrationHeader language="en"/>
            <section className={style.registerAccount}>
                <div className={style.register}>
                    <p className={style.formStep}>PASSO <strong>2</strong> DE <strong>3</strong></p>
                    <h4 className={style.titleStep}>Create a password to start your membership</h4>
                    <h6 className={style.descriptionStep}>Just a few more steps and you're done!<br />
                        We hate paperwork, too.</h6>
                </div>
            </section>
            <RegistrationFooter language="en" languageStep="pt2"/>
        </div>
    )
}

export default registerFormBr