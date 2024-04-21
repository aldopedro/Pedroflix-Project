import style from "./register.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useRef } from "react";


function registerFormBr() {
    function backToHome() {
        return navigate("/Pedroflix-Project/")
    }
    function portChange() {

    }
    function englishChange() {

    }
    const navigate = useNavigate();
function validateEmail(email: string) {
    const validate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!validate.test(email)) {
        setEmailValue(email);
        setEmailCorrect(1);
        return 1;
    } else {
        setEmailCorrect(2);
        setEmailValue(email);
        return 2;
    }
}
    const emailInputRef = useRef<HTMLInputElement>(null);
    const [activeContent, setActiveContent] = useState(Number)
    const [emailCorrect, setEmailCorrect] = useState(Number)
    const [emailValue, setEmailValue] = useState(String)
    const [activeLabel, setActiveLabel] = useState(Boolean)
    return (
        <div className={style.master}>
            <header className={style.header}>
                <h1 onClick={backToHome} className={style.headerTitle}>PEDROFLIX</h1>
                <button className={style.headerButton} >Entrar</button>
            </header>
            <section className={style.registerAccount}>
                <div className={style.register}>
                    <p className={style.formStep}>PASSO <strong>1</strong> DE <strong>3</strong></p>
                    <h4 className={style.titleStep}>Crie uma senha para iniciar sua assinatura</h4>
                    <h6 className={style.descriptionStep}>Faltam só mais alguns passos! <br />Nós também detestamos formulários.</h6>
                    <label className={activeLabel === false ? style.form_label : style.form_label_active} htmlFor="">Email</label>
                    <input ref={emailInputRef}
                        onChange={e => validateEmail(e.target.value)}
                        onClick={() => setActiveLabel(true)}
                        onBlur={(e) => validateEmail(e.target.value) === 1 && e.target.value != "" ? setActiveContent(2) : emailCorrect === 2 ? setActiveContent(1) : setActiveLabel(false)}
                        className={`${activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false : emailCorrect === 2 ? style.form_email_true : style.form_input}`}
                        type="email" name="email" id="input" value={emailValue} />
                    <input className={style.input} type="password" />
                    <button className={style.stepButton}>Próximo</button>
                </div>
            </section>
            <footer className={style.footer}>
                <div className={style.footerContent}>
                    <p className={style.footerTitle}>Dúvidas? Ligue 0800 591 2876</p>
                    <ul className={style.footerLink}>
                        <li className={style.footerLinkItem}>Perguntas frequentes</li>
                        <li className={style.footerLinkItem}>Central de Ajuda</li>
                        <li className={style.footerLinkItem}>Netflix Shop</li>
                        <li className={style.footerLinkItem}>Termos de Uso</li>
                        <li className={style.footerLinkItem}>Privacidade</li>
                        <li className={style.footerLinkItem}>Preferências de cookies</li>
                        <li className={style.footerLinkItem}>Informações corporativas</li>
                    </ul>
                    <div className={`nf nf-fa-globe ${style.footerMainSelect}`}>
                        <select onChange={(e) => e.target.value === "pt-BR" ? portChange() : englishChange()} name="LanguageSelect" className={style.footerSelect}>
                            <option lang="pt" label='Português' value="pt-BR" className={style.footerOption}>Português</option>
                            <option lang="en" label='English' value="en-BR" className={style.footerOption}>English</option>
                        </select>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default registerFormBr