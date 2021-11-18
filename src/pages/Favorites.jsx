import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  const RemovedFilm = props.unFavorite;

  return (
    <main className="films mb-3">
      <div className="container">
        <ul className="films-list list-group film-list">
          {props.favorites.map((favorite, index) => {
            return (
              <li key={index} className="list-group-item film-item p-5 mb-4">
                <div className="film-info">
                  <h5 className="film-title mb-3">{favorite.title}</h5>
                  <p className="film-description">{favorite.description}</p>
                </div>
                <div className="film-btn-area d-flex align-items-center mt-5">
                  <Link className="details-btn " to={`/films/${favorite.id}`}>
                    See Full Details
                  </Link>
                  <div
                    onClick={() => props.handleRemove(favorite)}
                    className="star-container d-flex justify-content-center align-items-center"
                  >
                    <RemovedFilm />
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

export default Favorites;
