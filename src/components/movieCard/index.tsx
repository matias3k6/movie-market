import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import MoviesTypes from 'contexts/MoviesContext/types';
import {
  StyledContentWrapper,
  StyledMovieCard,
  StyledCardMedia,
  StarsBox,
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
        <StarsBox>
          <StarIcon color={'primary'} />
          <Typography variant={'caption'}>
            {vote_average} ({vote_count} votes)
          </Typography>
        </StarsBox>
      </StyledContentWrapper>
    </StyledMovieCard>
  );
};

export default MovieCard;
