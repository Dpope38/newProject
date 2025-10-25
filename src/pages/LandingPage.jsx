import React from "react";
import { GraduationCap, Users, School } from "lucide-react";
import { Link } from "react-router";
import Nabar from "./components/Nabar";
let navbarStyle = [
  {
    icon: GraduationCap,
    label: "alumni",
    path: "/alumni",
  },
  {
    icon: Users,
    label: "PTA",
    path: "/pta",
  },
  {
    icon: School,
    label: "GMC",
    path: "/gmc",
  },
];
function LandingPage() {
  return (
    <>
      <header>
        <nav className="navbar bg-rose-900 shadow-sm">
          <div className="flex-1 flex items-center ">
            <div className="mx-auto">
              <ul className="menu menu-horizontal text-amber-50 font-bold text-[17px] px-1">
                {navbarStyle.map((items) => {
                  const Icon = items.icon;
                  return (
                    <li key={items.label}>
                      <Link to={items.path}>
                        <Icon className="" />
                        <span>{items.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <Nabar />
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-amber-100 font-bold">
                Hello there
              </h1>
              <p className="mb-5 text-gray-50">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary text-primary-content">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingPage;
