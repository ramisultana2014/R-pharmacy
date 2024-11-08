import { Link } from "react-router-dom";
import { Logo, SignUpForm } from "../components";
import styled from "styled-components";
import Wrapper from "../assets/wrapper/SignUp";
function SignUpPage() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
        <h3>home page</h3>
      </Link>

      <h2>please fill up the form</h2>

      <SignUpForm />
    </Wrapper>
  );
}

export default SignUpPage;
