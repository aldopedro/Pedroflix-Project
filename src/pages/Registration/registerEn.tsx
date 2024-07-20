import style from "./register.module.css"
import { useNavigate } from "react-router-dom"
import RegistrationFooter from "../../components/RegistrationFooter"
import RegistrationHeader from "../../components/RegistrationHeader";


function registerEn() {
    function nextStep () {
        return navigate ("/Pedroflix-Project/register-en/regform")
    }
    const navigate = useNavigate();
    return (
        <div className={style.master}>
            <RegistrationHeader language="en"/>
            <section className={style.registerAccount}>
                <div className={style.devices}></div>
                <p className={style.step}>PASSO <strong>1</strong> DE <strong>3</strong></p>
                <h4 className={style.stepTitle}>Finish setting up your account</h4>
                <h6 className={style.stepDescription}>Netflix is personalized for you. Create a password to start watching <br/>Pedroflix.</h6>
                <button className={style.stepButton} onClick={nextStep} >Next</button>
            </section>
            <RegistrationFooter language="en" languageStep="pt1"/>
        </div>
    )
} 
export default registerEn