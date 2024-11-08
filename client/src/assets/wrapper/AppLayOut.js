import styled from "styled-components";
const Wrapper = styled.div`
  padding: 2rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0 3rem;
  }
  .search {
    position: relative;
    width: 50%;
  }
  .search svg {
    position: absolute;
    right: 5%;
    top: 20%;
    width: 2rem;
    height: 2rem;
  }
  input {
    border-radius: 50px;
    padding: 4px 20px;
    width: 100%;
  }
  input::placeholder {
    font-size: 2rem;
    color: var(--color-brand-main-2);
  }
  .nav-account-info {
    //margin-left: auto;
    position: relative;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .logout {
    position: absolute;
    bottom: -80%;
    left: 20%;
    //transform: translate(20%, 0);
    //opacity: 0;
    display: none;
  }
  .logout button {
    font-size: 1.2rem;
    color: var(--color-grey-0);
    background-color: var(--color-brand-main-2);
    border: 3px solid var(--color-grey-900);
    box-shadow: 0 0 0 3px white;
    border-radius: 50px;
    padding: 1px;
    width: 8rem;
  }
  .logout button:hover {
    background-color: var(--color-brand-main-3);
    border: 3px solid var(--color-brand-main-2);
  }
  .nav-account-info:hover .logout,
  .logout:hover {
    //opacity: 1;

    display: block;
  }
  .showsidebar {
    display: none;
    background: none;
    border: none;
    transition: all 1s;
  }
  .showsidebar svg {
    width: 3rem;
    height: 3rem;
  }
  .showsidebar:hover svg:hover {
    background-color: var(--color-brand-main-2);
    color: var(--color-grey-100);
  }
  .nav-account-info svg {
    height: 3rem;
    width: 3rem;
    transition: all 1s;
    cursor: pointer;
  }

  svg:hover {
    color: var(--color-brand-main-2);
  }
  @media (max-width: 1000px) {
    .showsidebar {
      display: block;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    nav {
      padding: 0;
      display: grid;
      grid-template-columns: 10rem 1fr 10rem;
      gap: 1;
    }
    .search {
      width: 100%;
    }
    input {
      padding: 0;
    }
    input::placeholder {
      font-size: 1.4rem;
      color: var(--color-brand-main-2);
    }
    .nav-account-info svg {
      height: 2rem;
      width: 2rem;
    }
    .logout button {
      font-size: 0.6rem;
      padding: 1px;
      width: 4rem;
    }
  }
`;
export default Wrapper;