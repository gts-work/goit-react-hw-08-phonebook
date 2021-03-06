import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authSelectors from "../../redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // console.log("PrivateRoute ~ IsLoggedIn ==>>  ", IsLoggedIn);

  return (
    <Route {...routeProps}>
      {IsLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
