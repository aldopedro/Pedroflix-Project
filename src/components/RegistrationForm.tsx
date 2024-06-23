import style from "../pages/Registration/register.module.css"
import { useState } from "react";


function RegistrationForm() {
  async function validateAll (e:any) {
    if(emailCorrect === 2 && correctBorder === true) {
      e.preventDefault()
      fetch('http://localhost:8081', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(user)
      }).then(() => {})
    }
    e.preventDefault()
  }

  function validateEmail(email: string) {
    const validate = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!validate.test(email)) {
      setEmailValue(email);
      setUser({...user, email: emailValue, password: password})
      setEmailCorrect(1);
      return 1;
    } else {
      setEmailCorrect(2);
      setUser({...user, email: emailValue, password: password})
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
    if (validateUppercase.test(password) && validateLowercase.test(password) && validateNumber.test(password)){
      setCorrectBorder(true)
      setPassword(password)
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
  return (
    <form action="" onSubmit={async (e) => await validateAll(e)} method="post">
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
          onChange={(e) => validatePass(e.target.value) && e.target.value  === "" ? setActiveLabelPassword(false) : setActiveLabelPassword(true)}
          onBlur={(e) => validatePass(e.target.value) === false && e.target.value === "" ? setActiveLabelPassword(false) : validatePass(e.target.value) === true && e.target.value != "" ? setActiveLabelPassword(true) : setCorrectBorder(true)} 
          className={`${(validateUppercase === false || validateNumber === false) && password != "" && correctBorder === true ? style.borderPasswordFalse : validateUppercase === true && validateNumber === true ? style.borderPasswordTrue : style.form_input}`}
          type="password" name="password" value={password}/>
        <p className={validateUppercase === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>Informe uma senha com pelo menos uma letra maiúscula e uma minúscula</p>
        <p className={validateNumber === false && password != "" && correctBorder === true ? style.passwordIncorrect : style.passwordCorrect}>Informe uma senha com pelo menos um número</p>
      </div>
      <div>
        <button className={style.form_button}type="submit" onClick={validateAll}>Próximo</button>
      </div>
    </form>
  )
}
export default RegistrationForm