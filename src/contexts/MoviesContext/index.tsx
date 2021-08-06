import { createContext, Reducer, useEffect, useReducer } from 'react';
import { ReactNode } from 'react';
import { getCredits, getGenres, getMovies } from 'service';
import { InitialState, moviesReducer } from './reducer';
import MoviesTypes from './types';

export const MoviesContext = createContext(InitialState);

export const MoviesProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<MoviesTypes.MoviesState, MoviesTypes.Action>>(moviesReducer, InitialState);

  const searchMovies = (query: string): void => {
    dispatch({ type: 'request' });
    getMovies(query)
      .then((res) => {
        dispatch({
          type: 'success',
          results: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: 'failure', error });
      });
  };

  const getMovieCredits = (
    id: number,
    title: string,
    poster?: string
  ): void => {
    getCredits(id).then((res) => {
      dispatch({
        type: 'success',
        movieDetail: {
          title,
          poster,
          open: true,
          cast: res.data.cast.map((item: MoviesTypes.Cast) => ({
            name: item.name,
            known_for_department: item.known_for_department,
          })),
        },
      });
    });
  };

  useEffect(() => {
    dispatch({ type: 'loading' });
    getGenres().then((res) => {
      dispatch({ type: 'success', genres: res.data.genres });
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        dispatch,
        getMovieCredits,
        searchMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
