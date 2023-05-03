import * as Styled from './styles';
import { Search as Searchicon } from '@styled-icons/material-outlined';

const Search = () => {
  return (
    <form>
      <Styled.ImputContainer>
        <Searchicon />
        <Styled.Imput type="search" placeholder="Pesquisa" />
      </Styled.ImputContainer>
    </form>
  );
};

export default Search;
