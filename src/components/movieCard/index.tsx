import { Typography } from '@material-ui/core';
import Stars from 'components/stars';
import MoviesTypes from 'contexts/MoviesContext/types';
import {
  StyledContentWrapper,
  StyledMovieCard,
  StyledCardMedia,
} from './styled';

interface MovieCardProps extends MoviesTypes.SearchResult {
  onClick: () => void;
}

const MovieCard = ({
  title,
  release_date,
  poster_path,
  onClick,
  vote_count,
  vote_average,
}: MovieCardProps): JSX.Element => {
  return (
    <StyledMovieCard onClick={onClick}>
      <StyledCardMedia
        image={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'https://via.placeholder.com/254x380?text=No Image'
        }
        title={title}
      />
      <StyledContentWrapper>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'subtitle2'}>{release_date}</Typography>
        <Stars vote_count={vote_count} vote_average={vote_average} />
      </StyledContentWrapper>
    </StyledMovieCard>
  );
};

export default MovieCard;
