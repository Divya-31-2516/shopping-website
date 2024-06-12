import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import categoriesData from '../data/categories.json';

const flattenCategories = (categories, parent = '') => {
  return categories.reduce((acc, category) => {
    const path = parent ? `${parent} > ${category.name}` : category.name;
    acc.push(path);
    if (category.subcategories.length > 0) {
      acc = acc.concat(flattenCategories(category.subcategories, path));
    }
    return acc;
  }, []);
};

const options = flattenCategories(categoriesData.categories);

const TypeaheadSearch = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      options={options}
      value={inputValue}
      onChange={(event, newValue) => setInputValue(newValue)}
      renderInput={(params) => <TextField {...params} label="Search Categories" variant="outlined" />}
    />
  );
};

export default TypeaheadSearch;
