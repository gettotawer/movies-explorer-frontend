import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={false}/>
          <Main/>
        </Route>
        <Route exact path="/movies">
          <Header isLoggedIn={true}/>
          <Movies/>
        </Route>
        <Route exact path="/saved-movies">
          <Header isLoggedIn={true}/>
          <SavedMovies/>
        </Route>
        <Route exact path="/profile">
          <Header isLoggedIn={true}/>
          <Profile name={"Виталий"}/>
        </Route>
        <Route exact path="/signup">
          <Register/>
        </Route>
        <Route exact path="/signin">
          <Login/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
