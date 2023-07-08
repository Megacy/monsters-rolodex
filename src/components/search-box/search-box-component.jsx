import "./search-box-styles.scss";

const SearchBox = ({ onSearchHandler }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search monsters"
        className="searchBox"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default SearchBox;
