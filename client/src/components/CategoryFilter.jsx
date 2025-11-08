import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;