import React, { useState } from "react";
import "./sidebar.scss";
import { SideBarItems } from "../../data";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="sidebar">
      {SideBarItems.Top?.map(({ icon, name }, index) => (
        <div
          key={index}
          className={`menu-item ${active === name && "active"}`}
          onClick={() => setActive(name)}
        >
          <span>{icon}</span>

          <p>{name}</p>
        </div>
      ))}

      <hr />

      {SideBarItems.Middle?.map(({ icon, name }, index) => (
        <div
          key={index}
          className={`menu-item ${active === name && "active"}`}
          onClick={() => setActive(name)}
        >
          <span>{icon}</span>

          <p>{name}</p>
        </div>
      ))}

      <hr />

      <h3>Explore</h3>

      {SideBarItems.Explore?.map(({ icon, name }, index) => (
        <div
          key={index}
          className={`menu-item ${active === name && "active"}`}
          onClick={() => setActive(name)}
        >
          <span>{icon}</span>

          <p>{name}</p>
        </div>
      ))}

      <hr />
    </div>
  );
};

export default Sidebar;
