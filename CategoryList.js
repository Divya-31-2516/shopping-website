import React from 'react';
import CategoryItem from './CategoryItem';
import categoriesData from '../data/categories.json';

const CategoryList = () => {
  return (
    <div>
      {categoriesData.categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
