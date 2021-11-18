import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Films from "./Films";
import Filmdetails from "./Filmdetails";
import AddFavorites from "../components/AddFavorite";
import RemoveFavorites from "../components/RemoveFavorite";
import Favorites from "./Favorites";
import Favoritedetails from "./Favoritedetails";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteFilm = (film) => {
    const newFavoriteList = [...favorites, film];
    setFavorites(newFavoriteList);
  };

  const removeFavoriteFilm = (film) => {
    const newFavoriteList = favorites.filter((favorite) => {
      return favorite.id !== film.id;
    });

    setFavorites(newFavoriteList);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films favorite={AddFavorites} handleFavorite={addFavoriteFilm} />
          </Route>
          <Route exact path="/films/:filmid">
            <Filmdetails />
          </Route>

          <Route exact path="/favorites">
            <Favorites
              favorites={favorites}
              unFavorite={RemoveFavorites}
              handleRemove={removeFavoriteFilm}
            />
          </Route>

          <Route exact path="/films/:filmid">
            <Favoritedetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
