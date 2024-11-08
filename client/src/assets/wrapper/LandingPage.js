import styled from "styled-components";
import meduimMain from "../images/meduimMain.jpg";
const Wrapper = styled.section`
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.3),
      rgba(36, 42, 46, 0.3)
    ),
    url(${meduimMain});
  background-repeat: no-repeat;
  background-size: cover; /* or contain, depending on your design */
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  nav {
    padding: 2rem;
    display: flex;
    justify-content: center;
  }
  .logo {
    height: 10rem;
    transform: translateX(30%);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    //transform: translateY(10%);
  }
  .info p {
    width: 50%;
    font-size: 2rem;
    font-weight: 600;
    padding: 1em;
    box-shadow: var(--shadow-lg);
  }
  .info span {
    color: var(--color-brand-main-2);
    font-size: 4rem;
    font-weight: 700;
  }
  .btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    gap: 1rem;
    transform: translateY(30%);
  }
  a:link,
  a:visited {
    text-align: center;
    display: inline-block;
    padding: 0.8em 2em;
    font-size: 1.6rem;
    color: var(--color-brand-main-2);
    text-decoration: none;
    //background: var(--color-brand-main-2);
    background: var(--color-grey-800);
    //border: 2px solid green;
    cursor: pointer;
    border-radius: var(--border-radius-md);
    transition: all 1s;
  }
  a:hover {
    color: var(--color-grey-50);
    background: var(--color-grey-600);
  }
  .guest {
    grid-column: 1/-1;
  }

  @media (max-width: 800px) {
    .info p {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .btns {
      width: 80%;
    }
  }
`;
export default Wrapper;
