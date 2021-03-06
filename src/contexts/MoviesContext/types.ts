import { Dispatch } from 'react';

namespace MoviesTypes {
  export interface SearchResult {
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    backdrop_path?: string;
    poster_path?: string;
  }

  export interface SearchResponse {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: SearchResult[];
  }

  export interface Genre {
    id: number;
    name: string;
  }

  export interface Cast {
    known_for_department: string;
    name: string;
  }

  export interface Action {
    type: string;
    results?: SearchResponse;
    genres?: Genre[];
    movieDetail?: any;
    error?: string;
  }

  export interface MovieDetail extends Partial<SearchResult> {
    id: number,
    open: boolean;
    cast: Cast[];
  }

  export interface MoviesState {
    status: string;
    dispatch: Dispatch<Action>;
    getMovieCredits: (props: SearchResult) => void;
    searchMovies: (query: string) => void;
    movieDetail: MovieDetail;
    error?: string;
    data?: SearchResponse;
    genres?: Genre[];
  }
}

export default MoviesTypes;
