import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in....
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }
      else {
        //the user is logged out....
        dispatch({
          type:"SET_USER",
          user: null
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className ="app">
        <Switch>
          <Route path ="/chackout">
            <Header />
            <Checkout />
          </Route>
          <Route path ="/login">
            <Header />
            <Login />

          </Route>
          {/* this is the root pages */}
          <Route path ="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );


      {/* React router */}
      {/* localhost.com/  */}
      {/* localhost.com/checkout */}
      {/* localhost.com/login */}

}

export default App;
