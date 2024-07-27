import style from "./register.module.css"
import { useState } from "react";
import RegistrationFooter from "../../components/RegistrationFooter";
import RegistrationHeader from "../../components/RegistrationHeader";

interface Prop {
  language: string;
}

function RegistrationForm(language: Prop) {


  async function validateAll(e: any) {
    e.preventDefault()
    if (emailCorrect === 2 && correctBorder === true) {
      const result = await fetch('http://localhost:8081/add_user', {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Acess-Control-Allow-Origin": "http://localhost:5173" },
        body: JSON.stringify(user)
      }).then()
      setEmailExist(await result.json())
    }
  }

  function validateEmail(email: string) {
    const validate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!validate.test(email)) {
      setEmailValue(email);
      setUser({ ...user, password: password, email: emailValue })
      setEmailCorrect(1);
      return 1;
    } else {
      setEmailCorrect(2);
      setUser({ ...user, email: emailValue, password: password })
      setEmailValue(email);
      return 2;
    }
  }


  function validatePass(password: string) {
    const validateUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
    const validateLowercase = new RegExp(/^(?=.*[a-z]).+$/)
    const validateNumber = new RegExp(/^(?=.*[0-9]).+$/)

    if (validateUppercase.test(password) && validateLowercase.test(password)) {
      setValidateUppercase(true)
    } else {
      setValidateUppercase(false)
    } if (validateNumber.test(password)) {
      setValidateNumber(true)
    } else {
      setValidateNumber(false)
    }
    if (validateUppercase.test(password) && validateLowercase.test(password) && validateNumber.test(password)) {
      setCorrectBorder(true)
      setPassword(password)
      setUser({ ...user, password: password })
      return true
    }
    setPassword(password)
    setCorrectBorder(false)
    return false
  }
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [emailCorrect, setEmailCorrect] = useState(Number)
  const [emailValue, setEmailValue] = useState(String)
  const [activeLabel, setActiveLabel] = useState(Boolean)
  const [activeContent, setActiveContent] = useState(Number)

  const [activeLabelPassword, setActiveLabelPassword] = useState(Boolean)
  const [validateUppercase, setValidateUppercase] = useState(Boolean)
  const [validateNumber, setValidateNumber] = useState(Boolean)
  const [correctBorder, setCorrectBorder] = useState(Boolean)
  const [password, setPassword] = useState(String)
  const [emailExist, setEmailExist] = useState(String)



  if (language.language === "pt") {
    return (
      <div>
        <RegistrationHeader language="pt" />
        <div className={emailExist === "true" ? style.displayNone : style.displayAuto}>
          <div className={style.mainAlert}>
            <div className={style.emailExist}>
              <svg className={style.alertIcon} xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="24" viewBox="0 0 24 24" role="img" data-icon="WarningFillStandard" data-uia="UIMessage-content+icon" aria-hidden="true"><path fillRule="evenodd" clipRule={"evenodd"} d="M13.7306 2.99377C12.9603 1.66321 11.0392 1.66322 10.2689 2.9938L1.00357 18.9979C0.231657 20.3313 1.19377 22 2.73443 22H21.2655C22.8062 22 23.7683 20.3312 22.9964 18.9979L13.7306 2.99377ZM13.5002 9H10.5002L11.0002 14H13.0002L13.5002 9ZM12.0002 16C12.8287 16 13.5002 16.6716 13.5002 17.5C13.5002 18.3284 12.8287 19 12.0002 19C11.1718 19 10.5002 18.3284 10.5002 17.5C10.5002 16.6716 11.1718 16 12.0002 16Z" fill="currentColor"></path></svg>
              <div><strong>Parece que essa conta já existe.</strong><a className={style.loginAlert} href="/login"> Acesse essa conta</a> ou tente usar outro email.</div>
            </div>
          </div>
        </div>
        <section className={style.registerAccount}>
          <div className={style.register}>
            <p className={style.formStep}>PASSO <strong>2</strong> DE <strong>3</strong></p>
            <h4 className={style.titleStep}>Crie uma senha para iniciar sua assinatura</h4>
            <h6 className={style.descriptionStep}>Faltam só mais alguns passos! <br />Nós também detestamos formulários.</h6>
          </div>
          <form className={style.mainForm} action="" onSubmit={async (e) => await validateAll(e)} method="post">
            <label className={activeLabel === false ? style.form_label : style.form_label_active} htmlFor="">Email</label>
            <input
              onChange={e => validateEmail(e.target.value) && e.target.value != "" ? setActiveLabel(true) : setActiveLabel(false)}
              onClick={() => setActiveLabel(true)}
              onBlur={(e) => validateEmail(e.target.value) === 1 && e.target.value != "" ? setActiveContent(2) : emailCorrect === 2 ? setActiveContent(1) : setActiveLabel(false)}
              className={`${activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false : emailCorrect === 2 ? style.form_email_true : style.form_input}`}
              type="email" name="email" id="input" value={emailValue} />
            <div className={activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false_text : style.form_email_true_text}>
              <svg width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" /></svg>
              Informe um email válido.
            </div>
            <div className={style.mainInput}>
              <label className={activeLabelPassword === true ? style.passwordLabelTrue : style.passwordLabelFalse} htmlFor="">Adicione uma senha</label>
              <input onClick={() => setActiveLabelPassword(true)}
                onChange={(e) => validatePass(e.target.value) && e.target.value === "" ? setActiveLabelPassword(false) : setActiveLabelPassword(true)}
                onBlur={(e) => validatePass(e.target.value) === false && e.target.value === "" ? setActiveLabelPassword(false) : validatePass(e.target.value) === true && e.target.value != "" ? setActiveLabelPassword(true) : setCorrectBorder(true)}
                className={`${(validateUppercase === false || validateNumber === false) && password != "" && correctBorder === true ? style.borderPasswordFalse : validateUppercase === true && validateNumber === true ? style.borderPasswordTrue : style.form_input}`}
                type="password" name="password" value={password} />
              <p className={validateUppercase === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>Informe uma senha com pelo menos uma letra maiúscula e uma minúscula</p>
              <p className={validateNumber === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>Informe uma senha com pelo menos um número</p>
            </div>
            <div>
              <button className={style.form_button} type="submit" onClick={validateAll}>Próximo</button>
            </div>
          </form>
        </section>
        <RegistrationFooter language='pt' languageStep="en2" />
      </div>
    )
  } else
    return (
      <div>
        <RegistrationHeader language="en" />
        <section className={style.registerAccount}>
          <div className={style.register}>
            <p className={style.formStep}>PASSO <strong>2</strong> DE <strong>3</strong></p>
            <h4 className={style.titleStep}>Create a password to start your membership</h4>
            <h6 className={style.descriptionStep}>Just a few more steps and you're done!<br />
              We hate paperwork, too.</h6>
          </div>

          <form className={style.mainForm} action="" onSubmit={async (e) => await validateAll(e)} method="post">
            <label className={activeLabel === false ? style.form_label : style.form_label_active} htmlFor="">Email</label>
            <input
              onChange={e => validateEmail(e.target.value) && e.target.value != "" ? setActiveLabel(true) : setActiveLabel(false)}
              onClick={() => setActiveLabel(true)}
              onBlur={(e) => validateEmail(e.target.value) === 1 && e.target.value != "" ? setActiveContent(2) : emailCorrect === 2 ? setActiveContent(1) : setActiveLabel(false)}
              className={`${activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false : emailCorrect === 2 ? style.form_email_true : style.form_input}`}
              type="email" name="email" id="input" value={emailValue} />
            <div className={activeContent === 2 && emailValue != "" && emailCorrect === 1 ? style.form_email_false_text : style.form_email_true_text}>
              <svg width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" /></svg>
              Enter a valid email.
            </div>
            <div className={style.mainInput}>
              <label className={activeLabelPassword === true ? style.passwordLabelTrue : style.passwordLabelFalse} htmlFor="">Add a password</label>
              <input onClick={() => setActiveLabelPassword(true)}
                onChange={(e) => validatePass(e.target.value) && e.target.value === "" ? setActiveLabelPassword(false) : setActiveLabelPassword(true)}
                onBlur={(e) => validatePass(e.target.value) === false && e.target.value === "" ? setActiveLabelPassword(false) : validatePass(e.target.value) === true && e.target.value != "" ? setActiveLabelPassword(true) : setCorrectBorder(true)}
                className={`${(validateUppercase === false || validateNumber === false) && password != "" && correctBorder === true ? style.borderPasswordFalse : validateUppercase === true && validateNumber === true ? style.borderPasswordTrue : style.form_input}`}
                type="password" name="password" value={password} />
              <p className={validateUppercase === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>The password must have at least one uppercase and one lowercase letter</p>
              <p className={validateNumber === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>The password must have at least one number</p>
            </div>
            <div>
              <button className={style.form_button} type="submit" onClick={validateAll}>Next</button>
            </div>
          </form>
        </section>
        <RegistrationFooter language='en' languageStep="pt2" />
      </div>
    )
}
export default RegistrationForm