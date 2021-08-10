import { ChangeEvent, useEffect, useContext, useState } from 'react';
import { MoviesContext } from 'contexts/MoviesContext';
import {
  StyledSearchBox,
  StyledSearchTextField,
  StyledSearchWrapper,
} from './styled';
import debounce from 'utils/debounce';

const SearchBar = (): JSX.Element => {
  const { searchMovies, status } = useContext(MoviesContext);
  const [query, setQuery] = useState<string>('');
  const debouncedSearch = debounce(searchMovies, 2000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > 2 && status === 'success') debouncedSearch(query);
  }, [query]);

  return (
    <StyledSearchWrapper>
      <StyledSearchBox>
        <StyledSearchTextField
          placeholder={'Type something here...'}
          color={'primary'}
          onChange={handleChange}
        />
      </StyledSearchBox>
    </StyledSearchWrapper>
  );
};

export default SearchBar;
