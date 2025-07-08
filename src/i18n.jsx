import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          appName: "Movik",
          home: "Home",
          login: "Login",
          loginTitle: "Login Now",
          register: "Register",
          registerTitle: "Register Now",
          logout: "Logout",
          movies: "Movies",
          tv: "TV",
          people: "People",
          username: "User Name",
          email: "Email",
          phone: "Phone",
          password: "Password",
          confirmPassword: "Confirm Password",
          submit: "Submit",
          haveAccount: "Have an account? ",
          haveAccount2: "Don't have an account? ",
          log: "Log in",
          login2: "sign up",
          formName: "Enter your name",
          formEmail: "Enter your email",
          formPhone: "Enter your phone",
          formPassword: "Enter your password",
          formConfirmPassword: "Enter your confirm password",
          userNameError: "Username must be 3–20 characters",
          emailError: "Enter a valid email address",
          phoneError: "Phone must be a valid Egyptian number (starts with 01)",
          passwordError:
            "Password must be 8 characters long, at least one lowercase letter, one uppercase letter, one number and one special character",
          confirmPasswordError: "Password and confirm password not match",
          passwordError2: "invalid password",
          trending: "Trending",
          watch: "to watch now",
          unknown:"unknown",
        },
      },
      ar: {
        translation: {
          appName: "موفيك",
          home: "الصفحة الرئيسية",
          login: "تسجيل الدخول",
          register: "تسجيل جديد",
          loginTitle: "تسجيل الدخول ",
          registerTitle: "تسجيل جديد ",

          logout: "تسجيل الخروج",
          movies: "الافلام",
          tv: "المسلسلات",
          people: "الشخصيات",
          username: "اسم المستخدم",
          email: "البريد الالكتروني",
          phone: "رقم الهاتف",
          password: "كلمة المرور",
          confirmPassword: "تاكيد كلمة المرور",
          submit: "ارسال",
          haveAccount: "لديك حساب؟ ",
          haveAccount2: "ليس لديك حساب؟ ",
          log: "تسجيل الدخول",
          login2: "تسجيل جديد",

          formName: "ادخل اسمك",
          formEmail: "ادخل بريدك الالكتروني",
          formPhone: "ادخل رقم هاتفك",
          formPassword: "ادخل كلمة المرور",
          formConfirmPassword: "ادخل تاكيد كلمة المرور",
          userNameError: "اسم المستخدم يجب ان يكون 3-20 حرف",
          emailError: "ادخل بريد الكتروني صحيح",
          phoneError: "رقم الهاتف يجب ان يبدا ب 01",
          passwordError:
            "كلمة المرور يجب ان تكون 8 حروف و تحتوي علي حرف صغير و حرف كبير و رقم و رمز",
          confirmPasswordError: "كلمة المرور و تاكيد كلمة المرور لا يتطابقان",
          passwordError2: "كلمة المرور غير صحيحة",
          trending: "الاكثر مشاهدة",
          watch: "مشاهدة الان",
          unknown:"غير معروف",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
