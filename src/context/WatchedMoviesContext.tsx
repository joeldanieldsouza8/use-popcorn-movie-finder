import { useState, createContext } from "react";
import { tempWatchedData } from "../data/watchedData";
import { WatchedMovieProps } from "../types/watchedMovieType";

export interface WatchedMoviesContextProps {
  watched: WatchedMovieProps[];
  handleAddToWatched: (movie: WatchedMovieProps) => void;
  handleRemoveFromWatched: (imdbID: string) => void;
}

// Create a context
export const WatchedMoviesContext = createContext<
  WatchedMoviesContextProps | undefined
>(undefined);

// Create a provider
function WatchedMoviesProvider({ children }: { children: React.ReactNode }) {
  const [watched, setWatched] = useState<WatchedMovieProps[]>(tempWatchedData);

  function handleAddToWatched(movie: WatchedMovieProps) {
    const newMovie: WatchedMovieProps = {
      ...movie,
    };

    setWatched((prevWatched) => [...prevWatched, newMovie]);

    // console.log(watched); // debug
  }

  function handleRemoveFromWatched(imdbID: string) {
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== imdbID)
    );
  }

  const contextValue = {
    watched,
    handleAddToWatched,
    handleRemoveFromWatched
  };

  return (
    <WatchedMoviesContext.Provider value={contextValue}>
      {children}
    </WatchedMoviesContext.Provider>
  );
}

export { WatchedMoviesProvider };
