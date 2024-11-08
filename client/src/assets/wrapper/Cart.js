import styled from "styled-components";
const Wrapper = styled.div`
  height: 50vh;
  background: var(--body-background-color);

  display: flex;
  //align-items: center;
  justify-content: center;
  padding: 4.8rem;
  table {
    border-collapse: collapse;
    width: 90vw;
    text-align: center;
  }
  td {
    padding: 1rem 0;
  }
  tr {
  }
  th {
    background-color: var(--color-brand-main-2);

    padding: 1rem;
    width: 5rem;
  }
  td {
    border-bottom: 1px solid var(--color-brand-main-2);
    border-left: 1px solid var(--color-brand-main-2);
    border-right: 1px solid var(--color-brand-main-2);
    //height: 20rem;
  }
  .no-border {
    border-left: none;
    border-right: none;
  }
  .no-border-left {
    border-left: none;
  }
  img {
    width: 35%;
    border-radius: 50px;
  }

  button {
    background: none;
    border: none;
    width: 2rem;
    height: 2rem;
    transition: all 0.5s;
  }
  button:hover {
    scale: 2;
    color: var(--color-brand-main-2);
  }
`;
export default Wrapper;
