import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  //border: 2px solid black;
  gap: 5rem;
  img {
    width: 35%;
    align-self: center;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  span {
    color: var(--color-brand-main-2);
    font-family: 500;
    font-size: 2rem;
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
`;
export default Wrapper;
