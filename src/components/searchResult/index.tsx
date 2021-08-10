import { useContext, useEffect, useState } from 'react';
import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import MovieModal from 'components/movieModal';
import MovieCard from 'components/movieCard';
import { MoviesContext } from 'contexts/MoviesContext';
import MoviesTypes from 'contexts/MoviesContext/types';
import { StyledGridResult, StyledBoxNoResult } from './styled';

interface MoviesState extends MoviesTypes.Genre {
  results?: MoviesTypes.SearchResult[];
}

const SearchResult = (): JSX.Element => {
  const { data, genres, status, getMovieCredits, movieDetail, dispatch } =
    useContext(MoviesContext);
  const [results, setResults] = useState<MoviesState[]>([]);

  const handleClose = () => {
    dispatch({
      type: 'success',
      movieDetail: { open: false, title: '', cast: [], poster: '' },
    });
  };

  const handleModal = (id: number, title: string, poster: string): void => {
    getMovieCredits(id, title, poster);
  };

  useEffect(() => {
    if (data?.results && data.results.length > 0) {
      const groupResults: MoviesState[] =
        genres?.map((item: MoviesTypes.Genre) => ({
          ...item,
          results: data.results?.filter((res: MoviesTypes.SearchResult) =>
            res.genre_ids.includes(item.id)
          ),
        })) || [];
      setResults(groupResults);
    }
  }, [data]);

  return (
    <>
      {status === 'success' ? (
        results.map(
          (genre) =>
            genre.results &&
            genre.results.length > 0 && (
              <Box key={genre.id} padding={4}>
                <Typography variant={'h3'} color="textPrimary">
                  {genre.name}
                </Typography>
                <StyledGridResult container>
                  {genre.results.map((card) => (
                    <Grid key={card.id} item>
                      <MovieCard
                        {...card}
                        onClick={() =>
                          handleModal(
                            card.id,
                            card.title,
                            card.poster_path || ''
                          )
                        }
                      />
                    </Grid>
                  ))}
                </StyledGridResult>
              </Box>
            )
        )
      ) : (
        <StyledBoxNoResult>
          {status === 'error' && (
            <Typography variant={'h2'} color="textPrimary">
              We have some errors here!
            </Typography>
          )}
          {status === 'loading' && <CircularProgress size={48} />}
        </StyledBoxNoResult>
      )}
      <MovieModal
        open={movieDetail.open}
        title={movieDetail.title}
        image={movieDetail.poster}
        onClose={handleClose}
        cast={movieDetail.cast}
      />
    </>
  );
};

export default SearchResult;
