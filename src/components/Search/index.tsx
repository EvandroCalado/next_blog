import { useState } from 'react';
import * as Styled from './styles';
import { Search as Searchicon } from '@styled-icons/material-outlined';
import { useRouter } from 'next/router';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/search/${searchValue}`);
  };

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.ImputContainer>
        <Searchicon />
        <Styled.Imput
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
