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
  console.log("PublicRoute isRedirect ==>> ", isRedirect);
  console.log("PublicRoute restricted ==>>  ", restricted);
  console.log("PublicRoute IsLoggedIn ==>>  ", IsLoggedIn);

  return (
    <Route {...routeProps}>{isRedirect ? <Redirect to="/" /> : children}</Route>
  );
}
