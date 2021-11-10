import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import ErrorPage from "./Component/ErrorPage/ErrorPage.js";
import Home from "./Component/Home/Home.js";
import AllPopularItem from "./Component/AllPopularItem/AllPopularItem.js";
import Cart from "./Component/Cart/Cart.js";
import SingleMealDetail from './Component/SingleMealDetail/SingleMealDetail'
import Registration from "./Component/Registration/Registration.js";
import Order from "./Component/Order/Order.js";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.js";

export const userContext = createContext()
export const registerContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <registerContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <userContext.Provider value={[cart, setCart]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/allPopularItems">
              <AllPopularItem />
            </Route>
            <Route path="/singleMeal/:cocktailId">
              <SingleMealDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <PrivateRoute to="/order">
              <Order />
            </PrivateRoute>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </registerContext.Provider>
  );
}

export default App;
