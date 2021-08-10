import { ChangeEvent, useEffect, useContext, useState } from 'react';
import Close from '@material-ui/icons/Close';
import { MoviesContext } from 'contexts/MoviesContext';
import {
  StyledSearchBox,
  StyledSearchTextField,
  StyledSearchWrapper,
} from './styled';
import debounce from 'utils/debounce';
import { IconButton } from '@material-ui/core';

const SearchBar = (): JSX.Element => {
  const { searchMovies, status } = useContext(MoviesContext);
  const [query, setQuery] = useState<string>('');
  const debouncedSearch = debounce(searchMovies, 250);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleClean = (): void => {
    setQuery('');
  };

  useEffect(() => {
    if (query.length > 2 && status === 'success') debouncedSearch(query);
  }, [query]);

  return (
    <StyledSearchWrapper>
      <StyledSearchBox>
        <StyledSearchTextField
          placeholder={'Search a movie...'}
          color={'primary'}
          onChange={handleChange}
          value={query}
          endAdornment={
            query.length > 0 && (
              <IconButton onClick={handleClean}>
                <Close fontSize={'large'} />
              </IconButton>
            )
          }
        />
      </StyledSearchBox>
    </StyledSearchWrapper>
  );
};

export default SearchBar;
