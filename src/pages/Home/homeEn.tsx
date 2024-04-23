
import { useState } from 'react'
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import backgroundEN from "../../assets/background-EN.jpg"
import cardTwoVideo from "../../assets/card-one-video.mp4"
import tv from "../../assets/tv.png"
import pc from "../../assets/pc.png"
import toon from "../../assets/toon.png"
import cardFour from "../../assets/cardfour.png"
import cardFourSmall from "../../assets/cardfour-small-image.jpg"
import InputEmail from '../../components/InputEmail'


function homeEn() {
  function portChange() {
    return navigate("/Pedroflix-Project")
  }
  function englishChange() {
    return navigate("/Pedroflix-Project/en")
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
  const navigate = useNavigate();
  const [activeInfo, setActiveInfo] = useState(Number)
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
                      <option lang="en" label='English' value="en-BR">English</option>
                      <option lang="pt" label='Português' value="pt-BR">Português</option>
                    </select>
                    <div className={style.header_icon}>
                      <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" /></svg>
                    </div>
                  </div>
                  <div className={style.header_login}>
                    <a className={style.header_login_text} >Sign In</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={style.main_background}>
        <div className={style.background}>
          <img className={style.background_img} src={backgroundEN} alt="" />
          <div className={style.master_register}>
            <div className={style.main_register}>
              <h1 className={style.register_title}>
                Unlimited movies, TV shows, and more
              </h1>
              <p className={style.register_text}>Starts at BRL 18.90. Cancel anytime.</p>
              <div className={style.master_form}>
                <form action="">
                  <h3 className={style.form_title}>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <InputEmail />
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
            <h1 className={style.card_title}>Enjoy on your TV</h1>
            <p className={style.card_text}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className={style.card_one_moldure}>
            <img className={style.card_one_image} src={tv} alt="" />
            <div className={style.card_one_video}>
              <video playsInline muted loop autoPlay className={style.card_one_mp4}><source src="https://videos.pexels.com/video-files/4919748/4919748-hd_2048_1080_25fps.mp4" type="video/mp4" /></video>
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
            <h1 className={style.card_title}>Watch everywhere</h1>
            <p className={style.card_text}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
        <div className={style.card_three}>
          <div className={style.card_three_info}>
            <h1 className={style.card_title}>Create profiles for kids</h1>
            <p className={style.card_text}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
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
                <p className={style.card_four_gif_title}>Any Movie</p>
                <p className={style.card_four_gif_text}>Download in progress...</p>
              </div>
              <div className={style.card_four_gif}></div>
            </div>
          </div>
          <div className={style.card_four_info}>
            <h1 className={style.card_title}>Download your shows to watch offline</h1>
            <p className={style.card_text}>Watch on a plane, train, or submarine...</p>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.master_questions}>
          <h1 className={style.questions_title}>Frequently Asked Questions</h1>
          <ul className={style.questions}>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(1)} type="button">
                <span>What is PedroFlix?</span>
                <svg className={activeInfo === 1 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 1 ? style.active_info : style.desactive_info}>
                <span>
                  PedroFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.                    <br />
                  <br />
                  You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!                  </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(2)} type="button">
                <span>How much does PedroFlix cost?</span>
                <svg className={activeInfo === 2 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 2 ? style.active_info : style.desactive_info}>
                <span>
                  Watch PedroFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL18.90 to BRL55.90 a month. No extra costs, no contracts.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(3)} type="button">
                <span>Where can I watch?</span>
                <svg className={activeInfo === 3 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 3 ? style.active_info : style.desactive_info}>
                <span>
                  Watch anywhere, anytime. Sign in with your PedroFlix account to watch instantly on the web at PedroFlix.com from your personal computer or on any internet-connected device that offers the PedroFlix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.                  <br />
                  <br />
                  You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take PedroFlix with you anywhere.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(4)} type="button">
                <span>How do I cancel?</span>
                <svg className={activeInfo === 4 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 4 ? style.active_info : style.desactive_info}>
                <span>
                  PedroFlix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(5)} type="button">
                <span>What can I watch on PedroFlix?</span>
                <svg className={activeInfo === 5 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 5 ? style.active_info : style.desactive_info}>
                <span>
                  PedroFlix has an extensive library of feature films, documentaries, TV shows, anime, award-winning PedroFlix originals, and more. Watch as much as you want, anytime you want.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(6)} type="button">
                <span>Is PedroFlix good for kids?</span>
                <svg className={activeInfo === 6 ? style.active_icon : style.desactive_icon} height="36" width="36">
                  <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
                <svg className={activeInfo === 6 ? style.active_icon_mobile : style.desactive_icon_mobile}>
                  <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
                </svg>
              </button>
              <div className={activeInfo === 6 ? style.active_info : style.desactive_info}>
                <span>
                  The PedroFlix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.                  <br />
                  <br />

                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                </span>
              </div>
            </li>
          </ul>
          <div className={style.form}>
            <form className={style.master_form} action="">
              <h3 className={style.form_title}>Ready to watch? Enter your email to create or restart your membership.</h3>
              <InputEmail />
            </form>
          </div>
        </div>
      </section>
      <section className={style.section}>
      <footer className={style.footer}>
        <h6 className={style.footer_title}>Questions? Call <a className={style.footer_link} href="">0800 591 3517</a></h6>
        <ul className={style.footer_info}>
          <li><a className={style.footer_link} href="">FAQ</a></li>
          <li><a className={style.footer_link} href="">Help Center</a></li>
          <li><a className={style.footer_link} href="">Account</a></li>
          <li><a className={style.footer_link} href="">Media Center</a></li>
          <li><a className={style.footer_link} href="">Investor Relations</a></li>
          <li><a className={style.footer_link} href="">Jobs</a></li>
          <li><a className={style.footer_link} href="">Redeem Gift Cards</a></li>
          <li><a className={style.footer_link} href="">Buy Gift Cards</a></li>
          <li><a className={style.footer_link} href="">Ways to Watch</a></li>
          <li><a className={style.footer_link} href="">Terms of Use</a></li>
          <li><a className={style.footer_link} href="">Privacy</a></li>
          <li><a className={style.footer_link} href="">Cookie Preferences</a></li>
          <li><a className={style.footer_link} href="">Corporate Information</a></li>
          <li><a className={style.footer_link} href="">Contact Us</a></li>
          <li><a className={style.footer_link} href="">Speed Test</a></li>
          <li><a className={style.footer_link} href="">Legal Notices</a></li>
          <li><a className={style.footer_link} href="">Only on PedroFlix</a></li>
        </ul>
        <div className={style.main_header_language}>
          <div role="img" aria-hidden="true" className={style.header_language}>
            <svg fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d='M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z'></path></svg>
            <select onChange={(e) => e.target.value === "pt-BR" ? portChange() : englishChange()} name="LanguageSelect" id="LanguageChange">
              <option lang="en" label='English' value="en-BR">English</option>
              <option lang="pt" label='Português' value="pt-BR">Português</option>
            </select>
            <div className={style.header_icon}>
              <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" /></svg>
            </div>
          </div>
        </div>
        <div><h6 className={style.footer_name}>PedroFlix Brazil</h6></div>
      </footer>
    </section>
    </div>
  )
}
export default homeEn