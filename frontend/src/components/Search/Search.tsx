import { ChangeEvent } from 'react';

import { SearchIcon } from '../Icons';
import { Input } from '../Input';

type SearchProps = {
  placeholder?: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ placeholder, onSearch }: SearchProps) => {
  return (
    <Input
      placeholder={placeholder}
      leftIcon={<SearchIcon />}
      onChange={onSearch}
      delayed
    />
  );
};
