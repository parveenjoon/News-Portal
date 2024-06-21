import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, fetchArticles } from '../redux/articlesSlice';

const categories = ['general', 'business', 'technology', 'entertainment', 'sports'];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (category) => {
    dispatch(setCurrentCategory(category));
    dispatch(fetchArticles());
  };

  return (
    <div className="category-filter">
      <label htmlFor="category">Select a category:</label>
      <select id="category" onChange={(e) => handleChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
