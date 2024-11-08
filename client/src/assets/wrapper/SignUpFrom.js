import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

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
