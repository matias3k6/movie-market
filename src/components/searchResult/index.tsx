import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from '@material-ui/core';
import MovieCard from 'components/movieCard';
import { MoviesContext } from 'contexts/MoviesContext';
import MoviesTypes from 'contexts/MoviesContext/types';
import {
  StyledGridResult,
  StyledBoxNoResult,
  ModalWrapper,
  ListCast,
} from './styled';

interface MoviesState extends MoviesTypes.Genre {
  results?: MoviesTypes.SearchResult[];
}

interface Cast {
  known_for_department: string;
  name: string;
}

interface Modal {
  open: boolean;
  title: string;
  cast: Cast[] | [];
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
      {movieDetail ? (
        <Modal open={movieDetail.open} onClose={handleClose}>
          <ModalWrapper>
            <Card>
              <Box padding={2}>
                <Typography variant={'h4'}>{movieDetail.title}</Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                paddingLeft={8}
              >
                <img
                  src={
                    movieDetail.poster
                      ? `https://image.tmdb.org/t/p/w500/${movieDetail.poster}`
                      : 'https://via.placeholder.com/254x380?text=No Image'
                  }
                  alt={movieDetail.title}
                  height={380}
                />
                <ListCast>
                  <Typography variant={'h5'}>Casting:</Typography>
                  {movieDetail.cast.map((item) => (
                    <span
                      key={item.name}
                    >{`${item.name} | ${item.known_for_department}`}</span>
                  ))}
                </ListCast>
              </Box>
            </Card>
          </ModalWrapper>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

export default SearchResult;
