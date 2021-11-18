import React from "react";

const Home = () => {
  return (
    <div className="col-12">
      <div className="card-container d-flex justify-content-center align-items-center">
        <div className="card homepage-card shadow mb-5">
          <div className="card-body">
            <h3 className="card-title homepage-title mb-3">
              Studio Ghibli Film Database
            </h3>
            <p className="card-text homepage-text mb-4">
              Studio Ghibli Inc. is a Japanese animation film studio
              headquartered in Koganei, Tokyo. The studio is best known for its
              animated feature films, and has also produced several short
              subjects, television commercials, and one television film.
            </p>
            <small className="contact-info">
              If you like what you see then hit me up at{" "}
              <span className="highlight">lpattison25@gmail.com</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
