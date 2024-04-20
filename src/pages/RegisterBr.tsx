import style from "./Register.module.css"
import { useNavigate } from "react-router-dom"



function RegisterBr() {
    function backToHome () {
        return navigate ("/Pedroflix-Project/")
    }
    function portChange() {

    }
    function englishChange () {

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
                <button className={style.stepButton}>Próximo</button>
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
export default RegisterBr