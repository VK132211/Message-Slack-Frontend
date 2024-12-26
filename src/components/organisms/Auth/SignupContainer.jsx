import { SignupCard } from "./SignupCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "@/hooks/apis/auth/useSignup";
export const SignupContainer = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signupMutation } = useSignup();
  async function onSignupFormSubmit(e) {
    e.preventDefault();
    if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
      setValidationError({ message: "All fields are required" });
      return;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      setValidationError({ message: "Password did not match" });
      return;
    }
    setValidationError(null);
    await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });
  }
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/auth/signin");
      }, 3000);
    }
  }, [isSuccess, navigate]);
  return (
    <SignupCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
