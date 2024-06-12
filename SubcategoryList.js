import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SubcategoryList = ({ subcategory }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
        <ListItemText primary={subcategory.name} />
        {subcategory.subcategories.length > 0 ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subcategory.subcategories.map((subSubcategory, index) => (
            <SubcategoryList key={index} subcategory={subSubcategory} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SubcategoryList;
