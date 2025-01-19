import React from 'react';
import Search from './Search';
import ShowPrimium from './ShowPrimium';

const Search_Show = ({searchTerm, onSearchTerm}) => {
  return (
    <div>
      <Search searchTerm={searchTerm} onSearchTerm={onSearchTerm} />
      <ShowPrimium />
    </div>
  );
};

export default Search_Show;