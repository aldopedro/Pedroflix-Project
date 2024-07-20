import style from "../pages/Registration/register.module.css"
import { useNavigate } from "react-router-dom";
interface Prop {
    language: string;
    languageStep: string;
}

function RegistrationFooter(language: Prop) {
    const navigate = useNavigate();
    function portChange(languageStep: Prop) {
        if (languageStep.languageStep === "pt2") {
            return navigate("/Pedroflix-project/register-br/regform")
        } else if (languageStep.languageStep === "pt1") {
            return navigate("/Pedroflix-project/register-br")
        } else
            console.log()
    }
    function englishChange(language: Prop) {
        if (language.languageStep === "en2") {
            return navigate("/Pedroflix-project/register-en/regform")
        } else if (language.languageStep === "en1") {
            return navigate("/Pedroflix-project/register-en")
        } else
        console.log()
    }

    if (language.language === "pt") {
        return (
            <footer className={style.footer}>
                <div className={style.footerContent}>
                    <p className={style.footerTitle}>Dúvidas? Ligue 0800 591 2876</p>
                    <ul className={style.footerLink}>
                        <li className={style.footerLinkItem}>Perguntas frequentes</li>
                        <li className={style.footerLinkItem}>Central de Ajuda</li>
                        <li className={style.footerLinkItem}>Pedroflix Shop</li>
                        <li className={style.footerLinkItem}>Termos de Uso</li>
                        <li className={style.footerLinkItem}>Privacidade</li>
                        <li className={style.footerLinkItem}>Preferências de cookies</li>
                        <li className={style.footerLinkItem}>Informações corporativas</li>
                    </ul>
                    <div className={`nf nf-fa-globe ${style.footerMainSelect}`}>
                        <select onChange={(e) => e.target.value === "pt-BR" ? portChange(language) : englishChange(language)} name="LanguageSelect" className={style.footerSelect}>
                            <option lang="pt" label='Português' value="pt-BR" className={style.footerOption}>Português</option>
                            <option lang="en" label='English' value="en-BR" className={style.footerOption}>English</option>
                        </select>
                    </div>
                </div>
            </footer>
        )
    } else if(language.language === "en")
        return (
            <footer className={style.footer}>
                <div className={style.footerContent}>
                    <p className={style.footerTitle}>Questions? Call 0800 591 2876</p>
                    <ul className={style.footerLink}>
                        <li className={style.footerLinkItem}>FAQ</li>
                        <li className={style.footerLinkItem}>Help Center</li>
                        <li className={style.footerLinkItem}>Pedroflix Shop</li>
                        <li className={style.footerLinkItem}>Terms of Use</li>
                        <li className={style.footerLinkItem}>Privacy</li>
                        <li className={style.footerLinkItem}>Cookie Preferences</li>
                        <li className={style.footerLinkItem}>Corporate Information</li>
                    </ul>
                    <div className={`nf nf-fa-globe ${style.footerMainSelect}`}>
                        <select onChange={(e) => e.target.value === "pt-BR" ? portChange(language) : englishChange(language)} name="LanguageSelect" className={style.footerSelect}>
                            <option lang="en" label='English' value="en-BR" className={style.footerOption}>English</option>
                            <option lang="pt" label='Português' value="pt-BR" className={style.footerOption}>Português</option>
                        </select>
                    </div>
                </div>
            </footer>
        )
}


export default RegistrationFooter
