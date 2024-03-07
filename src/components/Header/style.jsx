import styled from "styled-components";

export const Container = styled.div`
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }

  header ul {
    position: relative;
    display: flex;
  }

  header ul li {
    list-style: none;
  }

  .navigation a {
    position: relative;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    margin-left: 30px;
    transition: 0.3s ease;
  }

  .navigation a:before {
    content: "";
    position: absolute;
    background: #fff;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
  }

  .navigation a:hover:before {
    width: 100%;
  }

  .brand {
    color: #fff;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
