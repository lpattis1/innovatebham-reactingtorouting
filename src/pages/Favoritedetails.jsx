import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Favoritedetails = (props) => {
  const [favorites, setFavorites] = useState({});
  const { favid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${favid}`)
      .then((res) => {
        return res.text();
      })
      .then((allFavorites) => {
        console.log(allFavorites);
      });
  }, []);

  console.log(favorites);

  return (
    <div className="col col-12">
      <div className="card-container d-flex justify-content-center align-items-center">
        <div key={favorites.id} className="card film-card shadow mb-3">
          <img
            src={favorites.image}
            alt=""
            className="card-img-top img-fluid film-img"
          />
          <div className="card-body">
            <h3 className="card-title film-title mt-3 mb-3">
              {favorites.title}
            </h3>
            <p className="card-text film-description mb-4">
              {favorites.description}
            </p>
            <hr />
            <div className="film-credits">
              <h5 className="stats-title mb-3 mt-4">Stats</h5>
              <p className="film-director">
                <span className="stat-highlight">Director:</span>{" "}
                <span className="director-highlight">
                  {favorites.director}{" "}
                </span>
              </p>
              <p className="producer-director">
                <span className="stat-highlight">Producer: </span>{" "}
                <span className="producer-highlight">{favorites.producer}</span>
              </p>
              <p className="film-release">
                <span className="stat-highlight">Release: </span>
                <span className="release-highlight">
                  {favorites.release_date}
                </span>
              </p>

              <p className="film-score mb-4">
                <span className="stat-highlight">RT Score: </span>{" "}
                <span
                  className={
                    favorites.rt_score > 80 ? "green-score" : "red-score"
                  }
                >
                  {favorites.rt_score}
                </span>
              </p>
            </div>
            <div className="btn-area d-flex justify-content-center align-items-center">
              <Link className=" back-btn" exact to="/favorites">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favoritedetails;
