import { useDispatch, useSelector } from "react-redux";
import { Nav, Button } from "react-bootstrap";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log("UserMenu ~ isLoggedIn ===>>  ", isLoggedIn);

  const name = useSelector(authSelectors.getUsername);

  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <span className={styles.name}>Hello, {name}</span>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="logout"
          onClick={() => dispatch(authOperations.logOut())}
        >
          <Button variant="outline-danger">Logout</Button>{" "}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
