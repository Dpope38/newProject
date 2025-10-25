import React from "react";
import { Link } from "react-router";
import { GraduationCap, Users, School } from "lucide-react";

let navbarStyle = [
  {
    icon: GraduationCap,
    label: "Home",
    path: "/alumni",
  },
  {
    icon: Users,
    label: "About",
    path: "/pta",
  },
  {
    icon: School,
    label: "Admissions",
    path: "/gmc",
  },
  {
    icon: School,
    label: "Academics",
    path: "/gmc",
  },
  {
    icon: School,
    label: "Boarding",
    path: "/gmc",
  },
];
function Nabar() {
  return (
    <nav className="navbar bg-neutral-50 shadow-sm">
      <div className="flex-1 flex items-center ">
        <div className="mx-auto">
          <ul className="menu menu-horizontal text-gray-700 font-bold text-[17px] px-1">
            {navbarStyle.map((items) => {
              const Icon = items.icon;
              return (
                <li key={items.label}>
                  <Link to={items.path}>
                    <Icon className="" />
                    {items.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nabar;
