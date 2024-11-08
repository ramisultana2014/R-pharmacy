import styled from "styled-components";
const Wrapper = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
  position: relative;
  color: var(--color-brand-main-2);
  font-weight: 600;
  li {
    cursor: pointer;
    transition: all 0.5s;
  }
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover,
  a:active {
    color: var(--text-color);
  }

  .generalProduct {
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    position: absolute;
    //top: 80%;
    left: 0;
    width: 100%;
    height: 50vh;
    z-index: 900;
    background: var(--body-background-color);
    transition: opacity 1s;
  }
  /* li:hover .generalProduct,
  .generalProduct:hover {
    opacity: 1;
    z-index: 999;
  } */
  .category {
    display: grid;
    grid-template-columns: repeat(2, 13rem);
    gap: 1rem;

    font-size: 1.3rem;
  }
  .brands-images {
    display: grid;
    grid-template-columns: repeat(3, 12rem);
    justify-items: center;
    gap: 1rem;
    align-items: center;
  }
  .brands-images img {
    object-fit: contain;
    filter: grayscale(20%);
  }
  .main-image {
    border-radius: 8px;
    object-fit: cover;
    width: 30%;
    filter: grayscale(20%);
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 700px) {
  }
`;
export default Wrapper;
