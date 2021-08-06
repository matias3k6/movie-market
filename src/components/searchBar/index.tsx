import { ChangeEvent, useEffect, useContext, useState } from 'react';
import { getMovies } from 'service';
import { MoviesContext } from 'contexts/MoviesContext';
import {
  StyledSearchBox,
  StyledSearchTextField,
  StyledSearchWrapper,
} from './styled';

const SearchBar = (): JSX.Element => {
  const { dispatch } = useContext(MoviesContext);
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const fetchData = () => {
    dispatch({ type: 'request' });
    getMovies(query)
      .then((res) => {
        dispatch({
          type: 'success',
          results: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: 'failure', error });
      });
  };

  useEffect(() => {
    if (query.length > 2) fetchData();
  }, [query]);

  return (
    <StyledSearchWrapper>
      <StyledSearchBox>
        <StyledSearchTextField placeholder={'Type something here...'} color={'primary'} onChange={handleChange} />
      </StyledSearchBox>
    </StyledSearchWrapper>
  );
};

export default SearchBar;
