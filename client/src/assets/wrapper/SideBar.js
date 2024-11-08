import styled from "styled-components";
const Wrapper = styled.aside`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  details {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }

  summary {
    font-weight: 500;
    //list-style-position: outside;
  }
  summary::marker {
    font-size: 2rem;
  }
  a {
    cursor: pointer;

    color: var(--text-color);
    margin-top: 2rem;
    text-decoration: none;
  }
  a:hover {
    color: var(--color-brand-main-2);
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Wrapper;
