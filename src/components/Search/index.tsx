import * as Styled from './styles';
import { useState } from 'react';
import { Search as Searchicon } from '@styled-icons/material-outlined';
import { useRouter } from 'next/compat/router';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const router: any = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/search/${searchValue}?page=1`);
  };

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.ImputContainer>
        <Searchicon />
        <Styled.Imput
          data-testid="input-search"
          type="search"
          placeholder="Pesquisa"
          onChange={(event) => handleChange(event.target.value)}
          value={searchValue}
        />
      </Styled.ImputContainer>
    </form>
  );
};

export default Search;
