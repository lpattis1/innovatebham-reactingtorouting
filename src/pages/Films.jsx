import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = (props) => {
  const [films, setFilms] = useState([]);

  const FavFilm = props.favorite;

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        return res.json();
      })
      .then((allFilms) => {
        setFilms(allFilms);
      });
  }, []);

  return (
    <main className="films mb-3">
      <div className="container">
        <ul className="films-list list-group film-list">
          {films.map((film, index) => {
            return (
              <li key={index} className="list-group-item film-item p-5 mb-4">
                <div className="film-info">
                  <h5 className="film-title mb-3">{film.title}</h5>
                  <p className="film-description">{film.description}</p>
                </div>
                <div className="film-btn-area d-flex align-items-center mt-5">
                  <Link className="details-btn " to={`/films/${film.id}`}>
                    See Full Details
                  </Link>
                  <div
                    onClick={() => props.handleFavorite(film)}
                    className="star-container d-flex justify-content-center align-items-center"
                  >
                    <FavFilm />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Films;
