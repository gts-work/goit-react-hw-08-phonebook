import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRedirect = IsLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {isRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
