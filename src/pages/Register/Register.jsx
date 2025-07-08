import {Typography , Button,Alert} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerSchema } from "../../validations/validation";
import {useNavigate} from "react-router-dom"
import { useLang } from "../../contexts/langContext";
import { register } from "../../APIs/axiosInstance";
import "./register.css"



const Register=() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language} = useLang();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);    
  const [submitErrors, setSubmitErrors] = useState([]);
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);


  }
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);

  }
  const getFormData = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
      
  }
  const handleSubmit = (e) => {
   
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const { error } = registerSchema.validate(formData, { abortEarly: false });
    if (error) {
       const errorObj = {};
       error.details.forEach((detail) => {
      const field = detail.path[0];
      switch (field) {
        case "user_name":
          errorObj.user_name = t("userNameError");
          break;
        case "email":
          errorObj.email = t("emailError");
          break;
        case "phone":
          errorObj.phone = t("phoneError");
          break;
        case "password":
          errorObj.password = t("passwordError");
          break;
        case "confirmPassword":
          errorObj.confirmPassword = t("confirmPasswordError");
          break;
        default:
          break;
      }


      });
      setErrors(errorObj);
    } 
    else {
      setErrors({});
      setLoading(true);
     register(formData).then((res) => {
        setLoading(false);
        setSubmitErrors([]);
        if(res.data.message === "Success created" )
        {
          
            navigate("/login");
        }
     }).catch((err) => {
         setLoading(false);
         setSubmitErrors(err.response.data.errors);

     })
  

    }
  };

  



  return (
    <>
       <Typography variant="h4" sx={{textAlign:"center" ,marginBlock:"20px"}} component={"h2"} >{t("registerTitle")}</Typography>
       {
        submitErrors.map((error, index) => (
          <Alert sx={{marginInline:"auto",width:{xs:"95%",sm:"70%"}}} severity="error" key={index}>{error.msg}</Alert>
        ))
       }
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='form-label'>{t("username")}</label>
            <input type="text" placeholder={t("formName")} name='user_name' id="name" className='form-control' onChange={getFormData} />
            <p className="error-text">{errors.user_name}</p>
            <label htmlFor="email" className='form-label'>{t("email")}</label>
            <input type="email" placeholder={t("formEmail")} name='email' id="email" className='form-control' onChange={getFormData}/>
            <p className="error-text">{errors.email}</p>
            <label htmlFor="phone" className='form-label'>{t("phone")}</label>
            <input type="phone" placeholder={t("formPhone")} name='phone' id="phone" className='form-control'onChange={getFormData}/>
            <p className="error-text">{errors.phone}</p>
            <label htmlFor="password" className='form-label'>{t("password")}</label>
            <div className="password-input">
                <input  autoComplete="new-password" type={showPassword ? "text" : "password"} placeholder={t("formPassword")} name='password' id="password" className='form-control' onChange={getFormData}/>
                <p className="error-text">{errors.password}</p>
            <span  onClick={handleTogglePassword}>{showPassword ? <VisibilityIcon className={language === "en" ? "icon-en" : "icon-ar"} /> : <VisibilityOffIcon className={language === "en" ? "icon-en" : "icon-ar"} />}</span>
            </div>
            <label htmlFor="confirmPassword" className='form-label'>{t("confirmPassword")}</label>
            <div className="password-input">
                <input autoComplete="true" type={showConfirmPassword ? "text" : "password"} placeholder={t("formConfirmPassword")} name='confirmPassword' id="confirmPassword" className='form-control' onChange={getFormData}/>
                <p className="error-text">{errors.confirmPassword}</p>
            <span  onClick={handleToggleConfirmPassword}>{showConfirmPassword ? <VisibilityIcon className={language === "en" ? "icon-en" : "icon-ar"} /> : <VisibilityOffIcon className={language === "en" ? "icon-en" : "icon-ar"}/>}</span>
            </div>
            {
                loading?
                <Button loading variant="outlined">submit</Button>:
                <Button type="submit" variant="outlined">{t("submit")}</Button>
            }
        </form>
        <Typography variant="body1" sx={{marginInlineStart:"15%" , marginBlock:"20px"}}>{t("haveAccount")} <Link to="/login" sx={{color:"blue"}}>{t("log")}</Link></Typography>
    </>
  )
}

export default Register