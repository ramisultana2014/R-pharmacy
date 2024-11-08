import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 7rem;
  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
  .container-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  img {
    border-radius: var(--border-radius-lg);
    width: 100%;
    height: auto;
  }

  .container-buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
export default Wrapper;
