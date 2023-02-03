import { Route, Switch, useHistory, Redirect, useLocation } from "react-router-dom";
import React from "react";
import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as Auth from '../../utils/Auth.js'
import { CurrentUserContext } from "../../Contexts/CurrentUserContext"
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loc, setLoc] = React.useState('');

  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
      Promise.all([auth(),getMovies()])
      setLoc(location.pathname)
  }, []);

  React.useEffect(() => {
      if(loggedIn){
        history.push(loc);
        if (!JSON.parse(localStorage.getItem('allMovies'))){
          moviesApi
          .getAllMovies()
          .then((movies) => {
            setFoundMovies(movies)
            localStorage.setItem('allMovies', JSON.stringify(movies));
          }).catch((err)=> console.log(err))
        } else if(JSON.parse(localStorage.getItem('filteredMovies'))){
          setFoundMovies(JSON.parse(localStorage.getItem('filteredMovies')))
        } else {
          setFoundMovies(JSON.parse(localStorage.getItem('allMovies')))
        }
      }
  }, [loggedIn]);

  function getMovies(){
    mainApi.getSavedMovies()
    .then((res) => {
      localStorage.setItem('allSavedMovies', JSON.stringify(res))
      setSavedMovies(res)
    }).catch((err) => console.log(err))
  }

  function auth() {
    return Auth.getContent()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setUserData(res);
        }
      }).catch((err) => console.log(err))
  };

  function handleGoBack(){
    history.goBack();
  }

  const onRegister = (email, name, password) => {
    return Auth.register(email, name, password).then((res) => {
        alert('Вы успешно зарегистрировались!')
        onLogin(email, password);
      }).catch(()=> {
        alert('Что-то пошло не так...')
      });
    };

  const onLogin = (email, password) => {
    return Auth.authorize(email, password).then((res) => {
        auth();
        history.push('/movies')
    }).catch(()=>{
      alert('Неверный E-mail или пароль!')
      });
  };

  const onProfileChange = (name, email) => {
    return Auth.changeUserInformation(name, email).then((res) => {
      setUserData(res);
      alert("Готово!")
    }).catch(()=>{
      alert('Что-то пошло не так')
    });
  }

  const onSignOut = () => {
    return Auth.logOut().then(() => {
      setLoggedIn(false);
      history.push('/');
      localStorage.removeItem('allMovies');
      localStorage.removeItem('filteredMovies');
      localStorage.removeItem('searchKeyword');
      localStorage.removeItem('checkbox');
      localStorage.removeItem('allSavedMovies')
      // localStorage.removeItem('filteredSavedMovies');
      // localStorage.removeItem('searchKeywordForSavedMovies');
      // localStorage.removeItem('checkboxForSavedMovies');
    });
  };

  const searchMovies = (movies, filmName="", duration) => {
    if(duration && filmName) {
      return movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(filmName.toLowerCase())
      );
    } else if(!duration && filmName){
      return movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(filmName.toLowerCase()) && movie.duration >= 40
      );
    } else if(!duration && !filmName){
      console.log('qqqq')
      return movies.filter((movie) =>
         movie.duration >= 40
      );
    } else {
      console.log('allo')
      return movies
    }
  };

  const handleSearchMovies = (name, isChecked) => {
      setIsPreloaderActive(true);
      const searchArr = searchMovies(
        JSON.parse(localStorage.getItem('allMovies')),
        name,
        isChecked
      );
      localStorage.setItem('filteredMovies', JSON.stringify(searchArr));
      localStorage.setItem('searchKeyword', name);
      localStorage.setItem('checkbox', isChecked);
      if (searchArr.length === 0) {
        setTimeout(() => {
          setIsPreloaderActive(false)
          setFoundMovies(searchArr);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsPreloaderActive(false)
          setFoundMovies(searchArr);
        }, 1000);
      }
  };

  const handleSearchSavedMovies = (name, isChecked) => {
    getMovies()
    setIsPreloaderActive(true);
    const searchArr = searchMovies(
      JSON.parse(localStorage.getItem('allSavedMovies')),
      name,
      isChecked
    );
    // localStorage.setItem('filteredSavedMovies', JSON.stringify(searchArr));
    // localStorage.setItem('searchKeywordForSavedMovies', name);
    // localStorage.setItem('checkboxForSavedMovies', isChecked);
    if (searchArr.length === 0) {
      setTimeout(() => {
        setIsPreloaderActive(false)
        setSavedMovies(searchArr);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsPreloaderActive(false)
        setSavedMovies(searchArr);
      }, 1000);
    }
};

  const handleSaveButtonCLick = (film) => {
    mainApi.saveFilm(film)
    .then(()=>{
      getMovies()
    }).catch(err => console.log(err))
  }

  const handleDeleteButtonCLick = (id) => {
    mainApi.deleteFilm(id)
    .then(()=>{
      getMovies()
    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={userData}>
        <Switch>
          <Route exact path="/">
            <Header 
            isLoggedIn={loggedIn} 
            isMainPage={true}
            isMoviesPage={false}
            isSavedMoviesPage={false}
            isAccount={false}/>
            <Main/>
          </Route>
          <ProtectedRoute
              exact
              path="/movies"
              RedirectPath="/"
              handleSaveButtonCLick={handleSaveButtonCLick}
              handleDeleteButtonCLick={handleDeleteButtonCLick}
              isPreloaderActive={isPreloaderActive}
              isMoviesPage={true}
              isSavedMoviesPage={false}
              isAccount={false}
              isLoggedIn={loggedIn}
              savedMovies={savedMovies}
              components={[Header, Movies]}
              handleSearchMovies={handleSearchMovies}
              foundMovies={foundMovies}
              setFoundMovies={setFoundMovies}
              setSavedMovies={setSavedMovies}
              
          />
          <ProtectedRoute
              exact
              path="/saved-movies"
              isPreloaderActive={isPreloaderActive}
              isLoggedIn={loggedIn}
              isMoviesPage={false}
              isSavedMoviesPage={true}
              isAccount={false}
              savedMovies={savedMovies}
              components={[Header, SavedMovies]}
              handleDeleteButtonCLick={handleDeleteButtonCLick}
              handleSearchSavedMovies={handleSearchSavedMovies}
              RedirectPath="/"
              getMovies={getMovies}
          />
          <ProtectedRoute
              exact
              path="/profile"
              isLoggedIn={loggedIn}
              isMoviesPage={false}
              isSavedMoviesPage={false}
              isAccount={true}
              onSignOut={onSignOut}
              onProfileChange={onProfileChange}
              components={[Header, Profile]}
              userData={userData}
              RedirectPath="/"
          />
          <Route exact path="/signup">
            {
              () => loggedIn ? <Redirect to="/"/> : <Register onRegister={onRegister}/>
            }
            
          </Route>
          <Route exact path="/signin">
            {
              () => loggedIn ? <Redirect to="/"/> : <Login onLogin={onLogin}/>
            }
          </Route>
          <Route>
            <NotFound handleGoBack={handleGoBack}/>
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
