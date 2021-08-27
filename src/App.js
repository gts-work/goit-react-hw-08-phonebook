import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "./components/Loader";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactsView from "./views/ContactsView";
import { authOperations } from "./redux/auth";

const Navigation = lazy(() =>
  import("./components/Navigation" /* webpackChunkName: "home-page" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Navigation />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/contacts" component={ContactsView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
