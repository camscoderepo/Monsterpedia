import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className=''>
      <input
        className=''
        type='search'
        placeholder='search monsters'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;