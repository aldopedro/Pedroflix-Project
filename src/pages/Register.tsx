import {useState} from 'react'

import style from "../components/register.module.css"

function register () {
    const [activeContent, setActiveContent] = useState(Number)
    return (
        <div className={style.master_register}>
            <div className={style.main_register}>
                <h1 className={style.register_title}>
                Divirta-se com filmes épicos, séries de sucesso e muito mais a partir de R$18,90.
                </h1>
                <p className={style.register_text}>Assine hoje, cancele quando quiser.</p>
                <div>
                    <form className={style.master_form} action="">
                        <h3 className={style.form_title}>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                        <div className={style.main_form}>
                            <div className={style.main_form_input}>
                                <label className={activeContent === 0 ? style.form_label : style.form_label_active} htmlFor="">Email</label>
                                <input onFocus={() => setActiveContent(1)} onBlur={(e) => (e.target.value.length) > 0 ? setActiveContent(1) : setActiveContent(0) } className={style.form_input} type="email" name="" id="input"/>
                            </div>
                            <div className={style.main_form_button}>
                                <button className={style.form_button} type="submit">Vamos lá
                                    <div className={style.form_button_icon}>
                                        <svg viewBox="0 0 24 24" width="24" height="24"> 
                                            <path  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    )
}
export default register