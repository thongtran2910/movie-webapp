import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/firebaseConfig";
import { InvertedButton } from "../button/ButtonComponent";
import FormInput from "../form-input/FormInputComponent";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;
        default:
          console.log("user creation encountered an error", err);
      }
    }
  };

  return (
    <div id="register" className="form__container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <InvertedButton>Sign Up</InvertedButton>
      </form>
    </div>
  );
};

export default SignUpForm;
