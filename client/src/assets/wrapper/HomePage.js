import styled from "styled-components";
const Wrapper = styled.div`
  .products {
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: all 1s;
  }
  a:hover {
    color: var(--color-brand-main-2);
  }
  .product {
    text-align: center;
    border-radius: 5px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
    box-shadow: var(--shadow-md);
    background: var(--image-background);
  }
  .product img {
    width: 40%;
  }
`;

export default Wrapper;
