import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

instance.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODZlZDQ4N2UxNjEyYjg0YTJlOWRiZDAzMzExYTFiZSIsInN1YiI6IjYxMGM4MjMzMzIzZWJhMDAyZmJkNWYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9ZGFsa6ABbd3gJCjEjeHMexo5YnRiUGwuq4GwwzRO0';

export const getMovies = (query: string): Promise<AxiosResponse> => {
  return instance.get('/search/movie', {
    params: {
      query,
    },
  });
};

export const getGenres = (): Promise<AxiosResponse> => {
  return instance.get('/genre/movie/list');
};

export const getCredits = (id: number): Promise<AxiosResponse> => {
  return instance.get(`/movie/${id}/credits`);
};
