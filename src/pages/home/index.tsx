import { Box } from '@material-ui/core';
import SearchBar from 'components/searchBar';
import SearchResult from 'components/searchResult';

const HomePage = (): JSX.Element => {
  return (
    <Box component={'article'}>
      <SearchBar />
      <SearchResult />
    </Box>
  );
};

export default HomePage;
