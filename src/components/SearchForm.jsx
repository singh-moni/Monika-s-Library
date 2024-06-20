import React from "react";

const SearchForm = ({ search, setSearch, getSearch }) => {
  return (
    <form onSubmit={getSearch} className="search--form">
      <input
        type="text"
        placeholder="Search Book in the collection"
        className="search--bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="search--btn">
        <img
          src="https://img.icons8.com/color/344/4a90e2/search--v1.png"
          alt=""
        />
      </button>
    </form>
  );
};

export default SearchForm;