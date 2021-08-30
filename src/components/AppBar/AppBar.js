import { useSelector } from "react-redux";
import { Navbar, Container } from "react-bootstrap";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log("AppBar ~ isLoggedIn ===>>  ", isLoggedIn);

  return (
    <>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand eventKey="t1" href="/">
            Home
          </Navbar.Brand>
          <Navigation />
        </Container>
      </Navbar>
    </>
  );
}
