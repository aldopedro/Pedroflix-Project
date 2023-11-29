import PopCornIcon from "../components/PopCornIcon"
import {useState} from 'react'
import style from "./Home.module.css"

function HomeEn () {
function portChange () {
    window.location.href = "/net-project"
}
function englishChange () {
    window.location.href = "/net-project-En"
}  
function activeOrDesactive (value:number){
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
      
const [activeContent, setActiveContent] = useState(Number)
const [activeInfo,setActiveInfo] = useState(Number)
  return (
    <div className={style.netflix_sans_font_loaded}>
    <div className={style.master_header}>
    <header className={style.main_header}>
      <div className={style.header_logo}>
        <span>
          <svg className={style.netflix_logo} viewBox="0 0 111 30"><g><path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
          </g></svg>
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
                  <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"/></svg>
                </div>
            </div>
              <div className={style.header_login}>
                <a className={style.header_login_text} href="/home">Entrar</a>
              </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    <div className={style.main_background}>
      <div className={style.background}>
        <img className={style.background_img} src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ed31f905-5708-4356-a25a-8f6cebf46e7f/BR-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg 1800w' srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ed31f905-5708-4356-a25a-8f6cebf46e7f/BR-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ed31f905-5708-4356-a25a-8f6cebf46e7f/BR-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ed31f905-5708-4356-a25a-8f6cebf46e7f/BR-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w' alt="" />
        <div className={style.master_register}>
            <div className={style.main_register}>
                <h1 className={style.register_title}>
                Enjoy big movies, hit series and more from BRL18.90.
                </h1>
                <p className={style.register_text}>Join today. Cancel anytime.</p>
                <div>
                    <form className={style.master_form} action="">
                        <h3 className={style.form_title}>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className={style.main_form}>
                            <div className={style.main_form_input}>
                                <label className={activeContent === 0 ? style.form_label : style.form_label_active} htmlFor="">Email address</label>
                                <input onFocus={() => setActiveContent(1)} onBlur={(e) => (e.target.value.length) > 0 ? setActiveContent(1) : setActiveContent(0) } className={style.form_input} type="email" name="" id="input"/>
                            </div>
                            <div className={style.main_form_button}>
                                <button className={style.form_button} type="submit">Get Started
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
        <div className={style.background_shadowUp}></div>
        <div className={style.background_shadowDown}></div>
      </div>
    </div>
    <div className={style.see_more}>
      <div>
        <PopCornIcon></PopCornIcon>
      </div>
      <div className={style.see_more_info}>
        <h2 className={style.see_more_title}>The Netflix you love for just BRL18.90.</h2>
        <p className={style.see_more_text}>Get the Standard with ads plan.</p>
        <button className={style.see_more_button}>Learn More
          <svg width="24" height="24"><path fill="#448ef4"d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"/></svg>
        </button>
      </div>
    </div>
    <section>
      <div className={style.card_one}>
        <div className={style.card_info}>
          <h1 className={style.card_title}>Enjoy on your TV</h1>
          <p className={style.card_text}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className={style.card_one_moldure}>
          <img className={style.card_one_image} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <div className={style.card_one_video}>
            <video playsInline muted loop autoPlay ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
          </div>
        </div>
      </div>
      <div className={style.card_two}>
        <div>
          <img className={style.card_two_image} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
          <div className={style.card_two_video}>
            <video autoPlay loop muted playsInline><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/></video>
          </div>
        </div>
        <div className={style.card_info}>
          <h1 className={style.card_title}>Watch everywhere</h1>
          <p className={style.card_text} >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
      </div>
      <div className={style.card_three}>
        <div className={style.card_three_info}>
          <h1 className={style.card_title} >Create profiles for kids</h1>
          <p className={style.card_text}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
        <div>
          <img src="https://occ-0-2650-420.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190"/>
        </div>
      </div>
      <div className={style.card_four}>
        <div className={style.card_four_image}>
          <img className={style.card_four_medium_image} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <div className={style.card_four_content}>
            <img className={style.card_four_small_image} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            <div className={style.card_four_gif_info}>
            <p className={style.card_four_gif_title}>Stranger Things</p>
            <p className={style.card_four_gif_text}>Download em andamento... </p>
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
      <section>
        <div className={style.master_questions}>
          <h1 className={style.questions_title}>Frequently Asked Questions</h1>
          <ul className={style.questions}>
            <li className={style.questions_li}>
                <button className={style.questions_button} onClick={() => activeOrDesactive(1)}type="button">
                  <span>What is Netflix?</span>
                  <svg className={activeInfo === 1 ? style.active_icon : style.desactive_icon} height="36" width="36">
                    <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                    </svg>
                </button>
                <div className={activeInfo === 1 ? style.active_info : style.desactive_info}>
                  <span>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.                    <br/>
                    <br/>
                    You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!                  </span>
                </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(2)} type="button">
                <span>How much does Netflix cost?</span>
                <svg className={activeInfo === 2 ? style.active_icon : style.desactive_icon} height="36" width="36">
                    <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
              </button>
              <div className={activeInfo === 2 ? style.active_info : style.desactive_info}>
                <span>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL18.90 to BRL55.90 a month. No extra costs, no contracts.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(3)} type="button">
                <span>Where can I watch?</span>
                  <svg className={activeInfo === 3 ? style.active_icon : style.desactive_icon} height="36" width="36">
                    <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                  </svg>
              </button>
              <div className={activeInfo === 3 ? style.active_info : style.desactive_info}>
                <span>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.                  <br/>
                  <br/>
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(4)} type="button">
                <span>How do I cancel?</span>
                <svg className={activeInfo === 4 ? style.active_icon : style.desactive_icon} height="36" width="36">
                    <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
              </button>
              <div className={activeInfo === 4 ? style.active_info : style.desactive_info}>
                <span>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.                </span>
              </div>
              </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(5)} type="button">
                <span>What can I watch on Netflix?</span>
                <svg className={activeInfo === 5 ? style.active_icon : style.desactive_icon} height="36" width="36">
                    <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                </svg>
              </button>
              <div className={activeInfo === 5 ? style.active_info : style.desactive_info}>
                <span>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                </span>
              </div>
            </li>
            <li className={style.questions_li}>
              <button className={style.questions_button} onClick={() => activeOrDesactive(6)} type="button">
                <span>Is Netflix good for kids?</span>
                <svg className={activeInfo === 6 ? style.active_icon : style.desactive_icon} height="36" width="36">
                      <path fill="currentColor" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
                  </svg>
              </button>
              <div className={activeInfo === 6 ? style.active_info : style.desactive_info}>
                <span>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.                  <br/>
                  <br/>

                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                </span>
              </div>
            </li>
          </ul>
            <div>
              <form className={style.master_form} action="">
                <h3 className={style.form_title}>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className={style.main_form}>
                  <div className={style.main_form_input}>
                    <label className={activeContent === 0 ? style.form_label : style.form_label_active} htmlFor="">Email address</label>
                    <input onFocus={() => setActiveContent(1)} onBlur={(e) => (e.target.value.length) > 0 ? setActiveContent(1) : setActiveContent(0) } className={style.form_input} type="email" name="" id="input"/>
                  </div>
                  <div className={style.main_form_button}>
                    <button className={style.form_button} type="submit">Get Started
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
      </section>
       
    
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    


      <footer className={style.footer}>
        <h6 className={style.footer_title}>Questions? Call<a className={style.footer_link}href="">0800 591 3517</a></h6>
        <ul className={style.footer_info}>
          <li><a className={style.footer_link} href="">FAQ</a></li>
          <li><a className={style.footer_link} href="">Help Center</a></li>
          <li><a className={style.footer_link} href="">   Account</a></li>
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
          <li><a className={style.footer_link} href="">Only on Netflix</a></li>
        </ul>
        <div className={style.main_header_language}>
          <div role="img" aria-hidden="true" className={style.header_language}>
            <svg fill="currentColor" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d='M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z'></path></svg>
            <select onChange={(e) => e.target.value === "pt-BR" ? portChange() : englishChange()} name="LanguageSelect" id="LanguageChange">
              <option lang="en" label='English' value="en-BR">English</option>
              <option lang="pt" label='Português' value="pt-BR">Português</option>
            </select>
            <div className={style.header_icon}>
                  <svg width="16" height="16"><path fill="currentColor" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"/></svg>
            </div>
          </div>
        </div>
        <div><h6 className={style.footer_name}>Netflix Brazil</h6></div>
      </footer>
  </div>
)}
export default HomeEn