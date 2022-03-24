import Header from "../components/common/Header";
import styled from "styled-components";

const PokeApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <PokeApp>
      <Header />
      { children }
    </PokeApp>
  )
}

export default Layout