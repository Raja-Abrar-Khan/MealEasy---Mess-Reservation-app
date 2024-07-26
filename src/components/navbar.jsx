import { Link } from "react-router-dom";
import { useState } from "react";
// import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (

    <div>
      <div className="w-full flex flex-row justify-between items-center bg-gray-800 h-16 shadow-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="logo">
              <img
                src="https://th.bing.com/th/id/OIP.hfwtErNXjdbIMUC8t5pxagHaHa?rs=1&pid=ImgDetMain"
                alt="Logo"
                width="50"
                height="50"
                style={{
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
              />
              <Link to="/" className="logo">
                IIT MESS RESERVATION
              </Link>
            </Link>
          </div >
          <div className="navLinks ">
            <div > <Link to="/home">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/order">MY ORDERS</Link></div>
          </div>
        </div>
        <div  className="navLinks flex flex-row space-x-2">
          <div><Link to="/logout">LOGOUT</Link></div>
          <div><Link to="/cart">CART</Link></div>

          <div className="profile">
            <Link to="/profile" className="profileButton">
              <img
                src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?rs=1&pid=ImgDetMain"
                alt="Profile"
                className="profilePic1"
              />
            </Link>
          </div>
        </div>
      </div>
      <button className="menuButton" onClick={toggleMenu}>
        &#9776;
      </button>
      {menuOpen && (
        <div className="menuLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/order">MY ORDERS</Link>
          <Link to="/logout">LOGOUT</Link>
        </div>
      )}
   </div>
  );
};

export default Navbar;
