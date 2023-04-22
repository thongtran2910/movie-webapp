import FormInput from "../form-input/FormInputComponent";
import { useState } from "react";
import { InvertedButton } from "../button/ButtonComponent";
import "./form.scss";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../Hook/useWindowDimensions";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <div className="form__container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleOnChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleOnChange}
          name="password"
          value={password}
        />
        <div className="button__container">
          <InvertedButton>Sign In</InvertedButton>
        </div>
      </form>
      {width < 1024 ? (
        <div className="text-mobile">
          <span>
            Don't have an Account? <a href="#register">Register Now</a>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default SignInForm;
