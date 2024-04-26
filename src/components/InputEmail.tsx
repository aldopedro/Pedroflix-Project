import style from "../pages/Home/Home.module.css"
import { useNavigate } from "react-router-dom"
import { useCallback, useRef, useState } from 'react'

interface Props {
  buttonText: string,
}

function InputEmail(props: Props) {
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
  function registerBr() {
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

  const [emailCorrect, setEmailCorrect] = useState(Number)
  const [emailValue, setEmailValue] = useState(String)
  const [activeLabel, setActiveLabel] = useState(Boolean)

  const handleFocusInput = useCallback(() => {
    event?.preventDefault()
    emailInputRef.current?.focus();
  }, [])
  const emailInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState(Number)

  return (
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
      <div>
      </div>
      <div>
        <button className={style.form_button} onClick={registerBr}>{props.buttonText}
          <div className={style.form_button_icon}><svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" /></svg></div>
        </button>
      </div>
    </div>
  )
}

export default InputEmail