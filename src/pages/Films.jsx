import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

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
          {films.map((film) => {
            return (
              <li className="list-group-item film-item p-5 mb-4">
                <div className="film-info">
                  <h5 className="film-title mb-3">{film.title}</h5>
                  <p className="film-description">{film.description}</p>
                </div>
                <div className="film-btn-area mt-5">
                  <Link className="details-btn mt-4" to={`/films/${film.id}`}>
                    See Full Details
                  </Link>
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
