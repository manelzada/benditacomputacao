import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-left: 5rem;
  margin-right: 5rem;
  height: 10vh;

  .pages {
    list-style: none;
    display: flex;
  }

  .pages li {
    letter-spacing: 3px;
    margin-left: 32px;
  }

  a:hover {
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    transition: 0.3s;
    color: black;
    font-size: 20px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  height: 70vh;
  margin: 50px;
  h1 {
    font-size: 50px;
    margin: 0;
    line-height: 50px;
  }
  .section-p {
    margin-top: 30px;
    color: #636265;
    width: 60%;
  }
`;

export const Separator = styled.hr`
  margin: 0 5rem;
  border: 1px solid #d9d9d9;
`;

export const Contact = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  background: #000;
  bottom: 5rem;
  right: 1px;
  border-radius: 50%;
`;

export const Button = styled.button`
  width: 150px;
  border: 1px solid #6241ee;
  cursor: pointer;
  background-color: #6241ee;
  border-radius: 10px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;

  text-align: center;
  .footer-img {
    width: 200px;
  }

  a {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
  .Social {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    svg {
      font-size: 24px;
      transition: 0.3s;
      cursor: pointer;
      margin: 0 0.4rem;
    }
    svg:hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
`;
