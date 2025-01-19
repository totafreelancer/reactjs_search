import React from 'react';

const search = ({searchTerm, onSearchTerm}) => {
  return (
    <div>
      <input 
      className='border' 
      type="search" 
      value={searchTerm}
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder='search...' 
      name="" 
      id="" />
    </div>
  );
};

export default search;