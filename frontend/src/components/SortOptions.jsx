import React from "react";

const SortOptions = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-options">
      <label>
        Sort by :
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="time">Time</option>
          <option value="score">Score</option>
        </select>
      </label>
    </div>
  );
};

export default SortOptions;
