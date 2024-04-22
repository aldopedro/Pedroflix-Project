import style from "../pages/Registration/register.module.css"


function RegistrationFooter () {

    function portChange() {

    }
    function englishChange () {

    }
    return (
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
    )
}

export default RegistrationFooter
