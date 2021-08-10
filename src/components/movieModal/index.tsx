import { Box, Dialog, IconButton, Typography } from '@material-ui/core';
import MoviesTypes from 'contexts/MoviesContext/types';
import Close from '@material-ui/icons/Close';
import { ListCast, DialogCloseButton, DialogWrapper } from './styled';
import Stars from 'components/stars';
import { useContext } from 'react';
import { MoviesContext } from 'contexts/MoviesContext';

interface Cast {
  known_for_department: string;
  name: string;
}

interface MovieDialogProps extends MoviesTypes.MovieDetail {
  onClose: () => void;
}

const MovieDialog = ({
  open,
  title,
  onClose,
  poster_path,
  cast,
  overview,
  release_date,
  vote_average = 0,
  vote_count = 0,
  genre_ids,
}: MovieDialogProps): JSX.Element => {
  const { genres } = useContext(MoviesContext);
  const filterGenres = genres?.filter((genre) => genre_ids?.includes(genre.id));
  const mapGenres = filterGenres?.map((gender) => gender.name);
  const filterDepartament = cast.map((item) => item.known_for_department);
  const cleanDuplicatedDepartament = filterDepartament.filter(
    (v: string, i: number) => filterDepartament.indexOf(v) === i
  );
  const customizeData = cleanDuplicatedDepartament.map(
    (departament: string) => ({
      departament,
      people: cast.filter(
        (person) => person.known_for_department === departament
      ),
    })
  );

  return (
    <Dialog open={open} onClose={onClose} transitionDuration={0} fullScreen>
      <DialogWrapper>
        <DialogCloseButton>
          <IconButton onClick={onClose}>
            <Close fontSize={'large'} />
          </IconButton>
        </DialogCloseButton>
        <Typography variant={'h4'}>{title}</Typography>
        <Typography variant={'subtitle2'}>{release_date}</Typography>
        <Typography variant={'subtitle2'}>
          Genres: {mapGenres?.join(', ')}.
        </Typography>
        <Stars vote_count={vote_count} vote_average={vote_average} />
        <Box display={'flex'} marginTop={4} marginBottom={4}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://via.placeholder.com/254x380?text=No Image'
            }
            alt={title}
            height={380}
          />
          <Box marginRight={4} marginLeft={4}>
            <Typography>{overview}</Typography>
          </Box>
        </Box>
        <div>
          <Typography variant={'h5'}>Casting:</Typography>

          {customizeData.map((item) => (
            <Box key={item.departament}>
              <Typography>{item.departament}</Typography>
              <ListCast component={'ul'}>
                {item.people.map((person: Cast) => (
                  <li key={person.name}>{person.name}</li>
                ))}
              </ListCast>
            </Box>
          ))}
        </div>
      </DialogWrapper>
    </Dialog>
  );
};

export default MovieDialog;
