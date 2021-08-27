import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from "./components/Container";
import Loader from "./components/Loader";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactsView from "./views/ContactsView";
import { authOperations } from "./redux/auth";

const AppBar = lazy(() =>
  import("./components/AppBar" /* webpackChunkName: "app-bar" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/contacts" component={ContactsView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
