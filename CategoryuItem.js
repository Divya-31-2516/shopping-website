import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SubcategoryList from './SubcategoryList';

const CategoryItem = ({ category }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
        <ListItemText primary={category.name} />
        {category.subcategories.length > 0 ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {category.subcategories.map((subcategory, index) => (
            <SubcategoryList key={index} subcategory={subcategory} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CategoryItem;
