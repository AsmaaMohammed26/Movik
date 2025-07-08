import {Typography , Button,Alert} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { loginSchema } from "../validations/validation";
import {useNavigate} from "react-router-dom"
import { useToken } from "../contexts/userContext";   
import { useLang } from "../contexts/langContext";
import { login } from "../APIs/axiosInstance";




const Login=() => {
  const { t } = useTranslation();
  const {setToken} = useToken();
  const navigate = useNavigate();
  const { language} = useLang();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);    
  const [submitErrors, setSubmitErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);


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
    const { error } = loginSchema.validate(formData, { abortEarly: false });
    if (error) {
       const errorObj = {};
       error.details.forEach((detail) => {
      const field = detail.path[0];
      switch (field) {
        case "email":
          errorObj.email = t("emailError");
          break;
        case "password":
          errorObj.password = t("passwordError2");
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
      logIN();

    }
  };

  function logIN(){
     login(formData).then((res) => {
        setLoading(false);
        setSubmitErrors([]);
        
        if(res.data.message === "Success login" )
        {
            const token = res.data.token;
            localStorage.setItem("token", token);
            setToken(token);

            navigate("/home");
        }
     }).catch((err) => {
         setLoading(false);
         setSubmitErrors(err.response.data.errors);

     })
  }
  



  return (
    <>
       <Typography variant="h4" sx={{textAlign:"center" ,marginBlock:"20px"}} component={"h2"} >{t("loginTitle")}</Typography>
       {
        submitErrors.map((error, index) => (
          <Alert sx={{marginInline:"auto",width:{xs:"95%",sm:"70%"}}} severity="error" key={index}>{error.msg}</Alert>
        ))
       }
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='form-label'>{t("email")}</label>
            <input type="email" placeholder={t("formEmail")} name='email' id="email" className='form-control' onChange={getFormData}/>
            <p className="error-text">{errors.email}</p>
            <label htmlFor="password" className='form-label'>{t("password")}</label>
            <div className="password-input">
                <input  autoComplete="true" type={showPassword ? "text" : "password"} placeholder={t("formPassword")} name='password' id="password" className='form-control' onChange={getFormData}/>
                <p className="error-text">{errors.password}</p>
            <span  onClick={handleTogglePassword}>{showPassword ? <VisibilityIcon className={language === "en" ? "icon-en" : "icon-ar"} /> : <VisibilityOffIcon className={language === "en" ? "icon-en" : "icon-ar"} />}</span>
            </div>
           
            {
                loading?
                <Button loading variant="outlined">submit</Button>:
                <Button type="submit" variant="outlined">{t("log")}</Button>
            }
        </form>
        <Typography variant="body1" sx={{marginInlineStart:"15%" , marginBlock:"20px"}}>{t("haveAccount2")} <Link to="/register" sx={{color:"blue"}}>{t("login2")}</Link></Typography>
    </>
  )
}

export default Login