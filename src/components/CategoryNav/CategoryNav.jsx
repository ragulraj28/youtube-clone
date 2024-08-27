import React, { useState } from "react";
import "./category-nav.scss";

const CategoryNav = ({ CategoryItems, activeItem }) => {
  const [active, setActive] = useState(activeItem);

  return (
    <div className="category-nav">
      {CategoryItems?.map((item, index) => (
        <div
          key={index}
          className={`category ${active === item && "active"}`}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CategoryNav;
