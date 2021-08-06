import MoviesTypes from './types';

export const InitialState: MoviesTypes.MoviesState = {
  status: 'empty',
  dispatch: () => null,
  getMovieCredits: () => null,
};

export const moviesReducer = (
  state: MoviesTypes.MoviesState,
  action: MoviesTypes.Action
): MoviesTypes.MoviesState => {
  switch (action.type) {
    case 'request':
      return { ...state, status: 'loading' };
    case 'success':
      return {
        ...state,
        status: 'success',
        data: action.results ? action.results : state.data,
        genres: action.genres ? action.genres : state.genres,
        movieDetail: action.movieDetail ? action.movieDetail : state.movieDetail
      };
    case 'failure':
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};
