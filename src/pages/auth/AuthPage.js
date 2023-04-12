import Button from "../../components/button/ButtonComponent";
import SignInForm from "../../components/form/SignInFormComponent";
import SignUpForm from "../../components/form/SignUpFormComponent";
import { Link } from "react-router-dom";
import "./auth.scss";

const AuthPage = () => {
  return (
    <>
      <div className="auth__container">
        <SignInForm />
        <SignUpForm />
      </div>
      <div className="btn__container">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </>
  );
};

export default AuthPage;
