import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.css";

import AuthenticatedRoute from "./authentication/AuthenticatedRoute"
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import BoardGamesIndex from "./BoardGamesIndex";
import BoardGameShowPage from "./BoardGameShowPage";
import NewBoardGameForm from "./NewBoardGameForm";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={BoardGamesIndex} />
        <Route exact path="/board-games" component={BoardGamesIndex} />
        <AuthenticatedRoute 
          exact={true}
          path="/board-games/new"
          component={NewBoardGameForm}
          user={currentUser}
        />
        <Route exact path="/board-games/:id"
          render={(props) => <BoardGameShowPage {...props} currentUser={currentUser}/>} 
        />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} /> 
      </Switch>
    </Router>
  );
};

export default hot(App);
