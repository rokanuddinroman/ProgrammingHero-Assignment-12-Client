import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { ImMenu3 } from "react-icons/im";
import "../../styles/Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../images/mainlogo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="bg-primary text-white fixed w-[100%] top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-[0.9rem] lg:px-0">
        <Link to="/">
          <img className="py-[12px] inline w-[150px]" src={logo} alt="Logo" />
        </Link>
        <nav className={show ? "mobilenavitems" : "navitems"}>
          <NavLink className="px-3 navlink" to="/">
            Home
          </NavLink>
          {user && (
            <NavLink className="px-3 navlink" to="/dashboard">
              Dashboard
            </NavLink>
          )}
          <NavLink className="px-3 navlink" to="/products">
            Shop
          </NavLink>
          <NavLink className="px-3 navlink" to="/reviews">
            Reviews
          </NavLink>
          <NavLink className="px-3 navlink" to="/blogs">
            Blogs
          </NavLink>
          <NavLink className="px-3 navlink" to="/careers">
            Careers
          </NavLink>
          {/* <NavLink className="px-3 navlink" to='/myportfolio'>About Developer</NavLink> */}
          <NavLink className="px-3 navlink mr-5" to="/about">
            About BoldShovel
          </NavLink>
          <div class="inline hr-divider"></div>
          <div className={show ? "block profile-button" : "inline"}>
            {user ? (
              <div class="dropdown dropdown-end">
                <button className=' ml-5 tabindex="0" bg-[#9ca3af1e] py-[5px] text-gray-200 rounded-[7px] px-3'>
                  <img
                    className="w-6 h-6 object-cover rounded-[50%] inline mr-1 "
                    src={user.photoURL}
                    alt=""
                  />
                  Account
                </button>

                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 drop-shadow-lg rounded-box w-[400px]"
                >
                  <li>
                    <div
                      onClick={() => {
                        navigate("/dashboard/myprofile");
                      }}
                      className="cursor-pointer flex items-center mb-[4px] rounded-[8px] hover:bg-[#f2fbff]"
                    >
                      <img
                        className="rounded-[10px] object-cover w-[60px] h-[60px]"
                        src={user.photoURL}
                        alt=""
                      />
                      <div className="ml-2">
                        <h1 className="font-[500] text-[18px] text-gray-600">
                          {user.displayName}
                        </h1>
                        <Link
                          className="text-[#4CCCFF] flex items-center"
                          to="/updateprofile"
                        >
                          <FiEdit className="mr-[0.3rem]" />
                          Update Profile
                        </Link>
                      </div>
                    </div>
                  </li>
                  <hr className="mt-2 bg-gray-300" />
                  <li>
                    <div
                      className="text-gray-600 active:bg-slate-600 "
                      onClick={() => logout()}
                    >
                      Sign Out
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink className="navlink header-btn" to="/login">
                Login <IoLogInOutline />
              </NavLink>
            )}
          </div>
        </nav>
        <button className="show-button" onClick={() => setShow(!show)}>
          <ImMenu3 color="white" className="text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
