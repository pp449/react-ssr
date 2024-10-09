import MovieItem from "./base/MovieItem";
import React from "react";
import Header from "./Header";

function MoviePage({ movies }) {
  return (
    <>
      <Header firstMovie={movies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movies.map(({ id, title, vote_average, poster_path }) => (
                <li key={id}>
                  <MovieItem
                    rate={vote_average}
                    title={title}
                    thumbnailUrl={poster_path}
                  />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default MoviePage;
