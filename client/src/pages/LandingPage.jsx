import styled from "styled-components";
import { Logo } from "../components";
import Wrapper from "../assets/wrapper/LandingPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import { useLogin } from "../../features/authentication/useLogin";
function LandingPage() {
  const { logIn, isPending } = useLogin();
  const [showloginForm, setShowLoginform] = useState(false);
  //console.log(showloginForm);
  function toggleLoginForm() {
    setShowLoginform((s) => !s);
  }
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="info">
        <h1>open 24/7</h1>
        <p>
          <span>R-pharmacy</span> is a pharmacy dedicated to offering
          exceptional and personalized services in the field of health,
          wellness, and nutrition. We pride ourselves on our unique approach to
          customer care, where our pharmacists are more than just a professional
          advisor, but like a trusted neighbour, a knowledgeable friend, or a
          caring family member.
        </p>
      </div>
      <div className="btns">
        <Link onClick={toggleLoginForm}>log in</Link>
        <Link to="/signup">sign up</Link>
        <Link
          type="submit"
          disabled={isPending}
          onClick={() =>
            logIn({ email: "guestUser@guest.com", password: "test1234" })
          }
          className="guest"
        >
          continue as a guest
        </Link>
      </div>
      {showloginForm && <LoginPage toggleLoginForm={toggleLoginForm} />}
    </Wrapper>
  );
}

export default LandingPage;
