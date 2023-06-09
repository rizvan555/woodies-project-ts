import styled from "styled-components";
import logo from "../resource/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10vh;
`;
const TitleBox = styled.section`
  display: flex;
  align-items: center;
  gap: 1vw;
  font-family: "Nunito";
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.25em;
  img {
    width: 30px;
    height: 30px;
  }
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 5vw;
  a {
    text-decoration: none;
    color: rgba(34, 34, 34, 0.75);
    font-size: 16px;
  }
`;

const Header = () => {
  const [navbar, setNavbar] = useState(["Home", "About", "Products"]);
  return (
    <HeaderStyled>
      <TitleBox>
        <img src={logo} alt="logo" />
        <h1>WOODIES</h1>
      </TitleBox>
      <Navbar>
        {navbar.map((nav, index) => {
          return (
            <Link to={`/${nav}`} key={index}>
              {nav}
            </Link>
          );
        })}
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
