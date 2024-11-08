import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  .formContainer {
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background: linear-gradient(
      180deg,
      rgba(204, 203, 214, 1) 28%,
      rgba(29, 140, 214, 1) 66%
    );
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
  }
  .btn-close {
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 0;
    right: 1rem;

    &:hover {
      background-color: var(--color-grey-100);
    }
    & svg {
      width: 2.4rem;
      height: 2.4rem;
      /* Sometimes we need both */
      /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
      color: var(--color-grey-500);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 30rem 1fr;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  input {
    border: none;
    color: var(--color-grey-900);
    padding: 15px 20px;
    border-radius: var(--border-radius-md);
  }
  input:not(:placeholder-shown):valid {
    outline: 3px solid var(--color-brand-main-2);
  }
  input:not(:placeholder-shown):invalid {
    outline: 3px solid red;
  }
  .btns {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 10rem);
    //width: 50%;
    gap: 1rem;
  }
  .btn {
    background: none;
    border: none;
    display: inline-block;
    transition: all 1s;
  }
  .submit {
    background-color: var(--color-brand-main-2);
    border-radius: 50px;
    border: 2px solid var(--color-grey-0);
    box-shadow: 0 0 0 3px white;
    padding: 8px 20px;
    color: var(--color-grey-0);
  }
  .submit:hover {
    background-color: var(--color-brand-main-3);
    /* color: var(--color-brand-main-2); */
  }
  .cancel {
    border: 2px solid var(--color-grey-400);
    border-radius: 50px;
  }
  .cancel:hover {
    background-color: var(--color-grey-400);
  }
  span {
    color: var(--color-red-800);
    font-weight: 500;
  }
  @media (max-width: 700px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }
`;
export default Wrapper;
