import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
// import "react-router-hash-link;"
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "Skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "Projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button
                  id="toConnect"
                  className="vvd"
                  onClick={() => console.log("connect")}
                >
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};



// import React from "react";
// import "../index.css";
// import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import {NavBar, Container} from "react"
// import exp from "constants";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       }
//       else {
//         setScrolled(false);
//       }
//       }
//       window.addEventListener("scroll", onScroll);
//       return () => window.removeEventListener("scroll", onscroll);
//     }, [])

//   return (
//     <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <NavBar.Brand href="#home">
//           <img src={''} alt="Logo" />
//         </NavBar.Brand>
//         <NavBar.Toggle aria-controls="basic-navbar-nav">
//         <span className="navbar-toggler-icon"></span>
//           <NavBar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
//             <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
//             <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Project</Nav.Link>
//            {/* <Nav.Link href="#home">Home</Nav.Link> */}
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#"><img src={} alt="" /> </a>
//             </div>
//             <button className="vvd" onClick={ () => console.log("connect")}<span> Let's Connect</span>
//           </span>
//           <NavBar.Collapse>

//       </Container>
//     </NavBar>



//   )}
//     <div className="w-[226px] border-4 border-solid h-screen py-8 rounded-r-3xl">
//       <div className="pl-4">
//         <nav className="flex flex-col w-full items-center justify-center">
//           <Link
//             to="/"
//             className="decoration-none flex items-center mb-16 justify-between text-inherit w-full"
//           >
//             <img className="h-12 w-12" src={Logo} alt="" />
//             <h4 className="text-textMain text-lg font-bold mr-4">Movie Box</h4>
//           </Link>
//         </nav>
//       </div>
//       <div className="">
//         <nav className="flex flex-col w-full items-center justify-center">
//           <ul className="flex flex-col h-full justify-between mt-4 w-full  text-base list-none">
//             <li className="homeIcon mb-4 flex h-20 w-full items-center text-textMinor justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
//               <HomeIcon className="ml-8" />
//               <p className="ml-8 font-semibold text-base">Home</p>
//             </li>

//             <li className="ondemandVideo text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
//               <OndemandVideo className="ml-8" />
//               <p className="ml-8 font-semibold text-base">Movies</p>
//             </li>
//             <li className="videocamIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
//               <VideocamIcon className="ml-8" />
//               <p className="ml-8 font-semibold text-base">TV Series</p>
//             </li>
//             <li className="upcomingIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
//               <UpcomingIcon className="ml-8" />
//               <p className="ml-8 font-semibold text-base">Upcoming</p>
//             </li>
//           </ul>
//           <div className="border-solid border text-textMinor text-sm text-left border-[#BE123C] pt-8 m-4 bg-[#FCF5F7] rounded-2xl p-2 flex items-center justify-center flex-col">
//             <p className="font-semibold -ml-4">
//               Play movie quizes<br></br>and earn<br></br>free tickets
//             </p>
//             <p className="ml-4">50k people are playing now</p>
//             <button className="border-none mt-2 flex justify-center items-center text-sm rounded-full bg-[#F0C8D2] px-4 font-semibold text-activeColor h-7 cursor-pointer">
//               Start playing
//             </button>
//           </div>
//           <div className="upcomingIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
//             <LogoutIcon className="ml-8" />
//             <p className="ml-8 font-semibold text-base">Log out</p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default NavBar;