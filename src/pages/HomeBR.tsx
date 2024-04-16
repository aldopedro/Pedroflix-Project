
import { useCallback, useRef, useState } from 'react'
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import backgroundBr from "../assets/background-BR.jpg"
import cardTwoVideo from "../assets/card-one-video.mp4"
import tv from "../assets/tv.png"
import pc from "../assets/pc.png"
import toon from "../assets/toon.png"
import cardFour from "../assets/cardfour.png"
import cardFourSmall from "../assets/cardfour-small-image.jpg"

function HomeBr() {
  function portChange() {
    return navigate("/Pedroflix-Project/")
  }
  function englishChange() {
    return navigate("/Pedroflix-Project/en")
  }
  function RegisterBr() {
    if (emailCorrect === 2 && emailValue != "") {
      return navigate("/Pedroflix-Project/register-br")
    }
    else if (emailValue === "") {
      event?.preventDefault()
      handleFocusInput()
      setActiveLabel(true)
    } else
      event?.preventDefault()
  }

  function activeOrDesactive(value: number) {
    if (activeInfo === 0) {
      setActiveInfo(value);
    } else if (activeInfo === 1) {
      value === 1 ? setActiveInfo(0) : setActiveInfo(value)
    } else if (activeInfo === 2) {
      value === 2 ? setActiveInfo(0) : setActiveInfo(value)
    } else if (activeInfo === 3) {
      value === 3 ? setActiveInfo(0) : setActiveInfo(value)
    } else if (activeInfo === 4) {
      value === 4 ? setActiveInfo(0) : setActiveInfo(value)
    } else if (activeInfo === 5) {
      value === 5 ? setActiveInfo(0) : setActiveInfo(value)
    } else if (activeInfo === 6) {
      value === 6 ? setActiveInfo(0) : setActiveInfo(value)
    }
  }
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
  const handleFocusInput = useCallback(() => {
    event?.preventDefault()
    emailInputRef.current?.focus();
  }, [])
  const emailInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState(Number)
  const [activeInfo, setActiveInfo] = useState(Number)
  const [emailCorrect, setEmailCorrect] = useState(Number)
  const [emailValue, setEmailValue] = useState(String)
  const [activeLabel, setActiveLabel] = useState(Boolean)
  return (
    <div className={style.PedroFlix_sans_font_loaded}>
      <div className={style.master_header}>
        <header className={style.main_header}>
          <div className={style.header}>
            <div className={style.header_logo}>
              <span className={style.header_logo_title}>
                PEDROFLIX
              </span>
            </div>
            <div className={style.header_buttons}>
              <div className={style.header_buttons_content}>
                <div className={style.main_header_language}>
                  <div role="img" aria-hidden="true" className={style.header_language}>
                    <svg fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d='M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z'></path></svg>
                    <select onChange={(e) => e.target.value === "pt-BR" ? portChange() : englishChange()} name="LanguageSelect" id="LanguageChange">
                      <option lang="pt" label='Português' value="pt-BR">Português</option>
                      <option lang="en" label='English' value="en-BR">English</option>
                    </select>
                    <div className={style.header_icon}>
                      <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" /></svg>
                    </div>
                  </div>
                  <div className={style.header_login}>
                    <a className={style.header_login_text} href="">Entrar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={style.main_background}>
        <div className={style.background}>
          <img className={style.background_img} src={backgroundBr} alt="" />
          <div className={style.master_register}>
            <div className={style.main_register}>
              <h1 className={style.register_title}>
                Filmes, séries e muito mais, sem limites
              </h1>
              <p className={style.register_text}>A partir de R$ 18,90. Cancele quando quiser.</p>
              <div className={style.master_form}>
                <form action="">
                  <h3 className={style.form_title}>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                  <div className={style.main_form}>
                    <div className={style.main_form_input}>
                      <label className={activeLabel === false ? style.form_label : style.form_label_active} htmlFor="">Email</label>
                      <input ref={emailInputRef}
                        onChange={e => validateEmail(e.target.value)}
                        onClick={() => setActiveLabel(true)}
                        onBlur={(e) => validateEmail(e.target.value) === 1 && e.target.value != "" ? setActiveContent(2) : emailCorrect === 2 ? setActiveContent(1) : setActiveLabel(false)}
                        className={`${activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false : emailCorrect === 2 ? style.form_email_true : style.form_input}`}
                        type="email" name="email" id="input" value={emailValue} />
                      <div className={activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false_text : style.form_email_true_text}>
                        <svg width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" /></svg>
                        Informe um email válido.
                      </div>
                    </div>
                    <div className={style.main_form_button}>
                      <button className={style.form_button} onClick={RegisterBr}>Vamos lá
                        <div className={style.form_button_icon}><svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" /></svg></div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={style.main_curve}>
            <div className={style.curve}>
              <div className={style.curve_container}></div>
            </div>
          </div>
          <div className={style.background_shadow}></div>
        </div>
      </div>
      <section className={style.section}>
        <div className={style.card_one}>
          <div className={style.card_info}>
            <h1 className={style.card_title}>Aproveite na TV</h1>
            <p className={style.card_text}>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
          </div>
          <div className={style.card_one_moldure}>
            <img className={style.card_one_image} src={tv} alt="" />
            <div className={style.card_one_video}>
              <video playsInline muted loop autoPlay className={style.card_one_mp4}><source  src="https://videos.pexels.com/video-files/4919748/4919748-hd_2048_1080_25fps.mp4" type="video/mp4" /></video>
            </div>
          </div>
        </div>
        <div className={style.card_two}>
          <div className={style.card_two_content}>
            <img className={style.card_two_image} src={pc} />
            <div className={style.card_two_video}>
              <video autoPlay loop muted playsInline><source src={cardTwoVideo} type="video/mp4" /></video>
            </div>
          </div>
          <div className={style.card_info}>
            <h1 className={style.card_title}>Assista onde quiser</h1>
            <p className={style.card_text} >Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
          </div>
        </div>
        <div className={style.card_three}>
          <div className={style.card_three_info}>
            <h1 className={style.card_title} >Crie perfis para crianças</h1>
            <p className={style.card_text}>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
          </div>
          <div>
            <img className={style.card_three_image} src={toon} />
          </div>
        </div>
        <div className={style.card_four}>
          <div className={style.card_four_image}>
            <img className={style.card_four_medium_image} src={cardFour} alt="" />
            <div className={style.card_four_content}>
              <img className={style.card_four_small_image} src={cardFourSmall} alt="" />
              <div className={style.card_four_gif_info}>
                <p className={style.card_four_gif_title}>Qualquer filme</p>
                <p className={style.card_four_gif_text}>Download em andamento... </p>
              </div>
              <div className={style.card_four_gif}></div>
            </div>
          </div>
          <div className={style.card_four_info}>
            <h1 className={style.card_title}>Baixe séries para assistir offline</h1>
            <p className={style.card_text}>Assista em um avião, trem ou submarino...</p>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.master_questions}>
          <h1 className={style.questions_title}>Perguntas frequentes</h1>
          <ul className={style.questions}>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(1)} type="button">
                <span className={style.questions_subtitle}>O que é a PedroFlix?</span>
                <svg className={activeInfo === 1 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 1 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 1 ? style.active_info : style.desactive_info}>
                <span>
                  A PedroFlix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                  <br />
                  <br />
                  Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(2)} type="button">
                <span className={style.questions_subtitle}>Quanto custa a PedroFlix?</span>
                <svg className={activeInfo === 2 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 2 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 2 ? style.active_info : style.desactive_info}>
                <span>
                  Assista à PedroFlix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(3)} type="button">
                <span className={style.questions_subtitle}>Onde posso assistir?</span>
                <svg className={activeInfo === 3 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 3 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 3 ? style.active_info : style.desactive_info}>
                <span>
                  Assista onde quiser, quando quiser. Faça login com sua conta PedroFlix em PedroFlix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo PedroFlix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                  <br />
                  <br />
                  Você também pode baixar a sua série favorita com o aplicativo PedroFlix para iOS, Android ou Windows 10. Use downloads para levar a PedroFlix para onde quiser sem precisar de conexão com a Internet. Leve a PedroFlix com você para qualquer lugar.
                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(4)} type="button">
                <span className={style.questions_subtitle}>Como faço para cancelar?</span>
                <svg className={activeInfo === 4 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 4 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 4 ? style.active_info : style.desactive_info}>
                <span>
                  A PedroFlix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(5)} type="button">
                <span className={style.questions_subtitle}>O que eu posso assistir na PedroFlix?</span>
                <svg className={activeInfo === 5 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 5 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 5 ? style.active_info : style.desactive_info}>
                <span>
                  A PedroFlix tem um grande catálogo de filmes, documentários, séries, originais PedroFlix premiados e muito mais. Assista o quanto quiser, quando quiser.
                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(6)} type="button">
                <span className={style.questions_subtitle}>A PedroFlix é adequada para crianças?</span>
                <svg className={activeInfo === 6 ? style.active_icon : style.desactive_icon}>
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 6 ? style.active_info : style.desactive_info}>
                <span>A experiência infantil da PedroFlix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                  <br />
                  <br />
                  O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                </span>
              </div>
            </li>
          </ul>
          <div className={style.form}>
            <form className={style.master_form} action="">
              <h3 className={style.form_title}>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
              <div className={style.main_form}>
                <div className={style.main_form_input}>
                  <label className={activeLabel === false ? style.form_label : style.form_label_active} htmlFor="">Email</label>
                  <input
                    onChange={e => validateEmail(e.target.value)}
                    onClick={() => setActiveLabel(true)}
                    onBlur={(e) => validateEmail(e.target.value) === 1 && e.target.value != "" ? setActiveContent(2) : emailCorrect === 2 ? setActiveContent(1) : setActiveLabel(false)}
                    className={`${activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false : emailCorrect === 2 ? style.form_email_true : style.form_input}`}
                    type="email" name="email" id="input" value={emailValue} />
                  <div className={activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false_text : style.form_email_true_text}>
                    <svg width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" /></svg>
                    Informe um email válido.
                  </div>
                </div>
                <div className={style.main_form_button}>
                  <button className={style.form_button} type="submit">Vamos lá
                    <div className={style.form_button_icon}><svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" /></svg></div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className={style.section}>
      <footer className={style.footer}>
        <h6 className={style.footer_title}>Dúvidas? Ligue <a className={style.footer_link} href="">0800 591 2876</a></h6>
        <ul className={style.footer_info}>
          <li><a className={style.footer_link} href="">Perguntas frequentes</a></li>
          <li><a className={style.footer_link} href="">Central de Ajuda</a></li>
          <li><a className={style.footer_link} href="">Conta</a></li>
          <li><a className={style.footer_link} href="">Media Center</a></li>
          <li><a className={style.footer_link} href="">Relações com investidores</a></li>
          <li><a className={style.footer_link} href="">Carreiras</a></li>
          <li><a className={style.footer_link} href="">Resgatar cartão pré-pago</a></li>
          <li><a className={style.footer_link} href="">Comprar cartão pré-pago</a></li>
          <li><a className={style.footer_link} href="">Formas de assistir</a></li>
          <li><a className={style.footer_link} href="">Termos de Uso</a></li>
          <li><a className={style.footer_link} href="">Privacidade</a></li>
          <li><a className={style.footer_link} href="">Preferências de cookies</a></li>
          <li><a className={style.footer_link} href="">Informações corporativas</a></li>
          <li><a className={style.footer_link} href="">Entre em contato</a></li>
          <li><a className={style.footer_link} href="">Teste de velocidade</a></li>
          <li><a className={style.footer_link} href="">Avisos legais</a></li>
          <li><a className={style.footer_link} href="">Só na PedroFlix</a></li>
        </ul>
        <div className={style.main_header_language}>
          <div role="img" aria-hidden="true" className={style.header_language}>
            <svg fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d='M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z'></path></svg>
            <select onChange={(e) => e.target.value === "pt-BR" ? portChange() : englishChange()} name="LanguageSelect" id="LanguageChange">
              <option lang="pt" label='Português' value="pt-BR">Português</option>
              <option lang="en" label='English' value="en-BR">English</option>
            </select>
            <div className={style.header_icon}>
              <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" /></svg>
            </div>
          </div>
        </div>
        <div><h6 className={style.footer_name}>PedroFlix Brasil</h6></div>
      </footer>
      </section>
    </div>
  )
}
export default HomeBr