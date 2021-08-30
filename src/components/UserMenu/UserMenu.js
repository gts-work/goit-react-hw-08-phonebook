import { useDispatch, useSelector } from "react-redux";
import { Nav, Button } from "react-bootstrap";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log("UserMenu ~ isLoggedIn ===>>  ", isLoggedIn);

  const name = useSelector(authSelectors.getUsername);

  return (
    <Nav className="me-auto">
      <Nav.Link>
        <span className={styles.name}>Hello, {name}</span>
        <Button
          className={styles.btn_logout}
          variant="outline-warning"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </Button>
      </Nav.Link>
    </Nav>
  );
}
