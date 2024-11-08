import styled from "styled-components";
const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(204, 203, 214, 1) 28%,
    rgba(29, 140, 214, 1) 66%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  //align-items: center;
  gap: 3rem;
  padding: 1rem 4rem;
  h3 {
    opacity: 0;
    text-decoration: none;
    color: #fff;
    position: absolute;
    top: 5%;
    font-size: 1rem;
  }
  a:hover h3 {
    opacity: 1;
  }
`;
export default Wrapper;
