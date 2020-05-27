import React, { Fragment } from "react";
import Main from "./web/Main";
import Header from "./web/Header";
import Login from "./components/auth/Login";

import Calculadora from "./components/Calculadora/Calculadora";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nosotros from "./web/Nosotros";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;

/**
 * 
 * import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import AboutPage from "./pages/About/AboutPage";
import HomeLogin from "./HomeLogin";
import PickUpPoint from "./pages/PickUpPoint/PickUpPoint";
import BookingList from "./pages/bookingList/BookingList";
import FormAddTrip from "./pages/AddTrip/AddTrip";
import ActiveTrips from './pages/ActiveTrips/ActiveTrips';
import Logout from "./pages/Logout/Logout";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
// HomeLogin es un componente de paso para pasar al verdadero home

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/signIn" component={LoginPage} />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/login" component={HomeLogin} />
        <PrivateRoute path="/pickup-points" component={PickUpPoint} />
        <PrivateRoute path="/booking" component={BookingList} />
        <PrivateRoute path="/add-trip" component={FormAddTrip} />
        <PrivateRoute exact path="/active-trips" component = {ActiveTrips}/>
        <Route path="/logout" component={Logout} />
        <Redirect from="/" to="/signIn" />
      </Switch>
    </Router>
  );
};

export default RouterApp;

 */
