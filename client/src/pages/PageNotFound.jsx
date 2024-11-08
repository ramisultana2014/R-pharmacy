import styled from "styled-components";
import Wrapper from "../assets/wrapper/PageNotFound";
import { Link } from "react-router-dom";

function PageNotFound({ errorMessage, errorMessagecart }) {
  if (errorMessagecart)
    return (
      <Wrapper>
        <div className="box">
          <h1>{errorMessagecart}</h1>

          <Link to="/homepage" replace="true">
            Home Page
          </Link>
        </div>
      </Wrapper>
    );
  return (
    <Wrapper>
      <div className="box">
        {errorMessage ? (
          <h1>{errorMessage}</h1>
        ) : (
          <h1> The page you are looking for could not be found 😢</h1>
        )}

        <Link to="/" replace="true">
          please Sign Up
        </Link>
      </div>
    </Wrapper>
  );
}

export default PageNotFound;
