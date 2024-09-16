import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidebar-container">
      <nav className="sidebar">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`sidebar-link ${
                  location.pathname === item.to ? "active" : ""
                }`} // Apply "active" class if the route matches
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
