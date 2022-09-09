import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaCar, FaHome } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section className="side">
        <div className="top">
          <div className="brand">
            <FaCar />
            <span> Kruss</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <Link to="/dashboard" className="sides">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <Link to="/" className="sides">
                  <FaHome />
                  <span> Home</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <Link to="/about" className="sides">
                  <FcAbout />
                  <span> About</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <Link to="#" className="sides">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <Link to="#" className="sides">
                  <GiTwirlCenter />
                  <span> Courses</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : ""}
              >
                <Link to="#" className="sides">
                  <BsFillChatTextFill />
                  <span> FAQ</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(7)}
                className={currentLink === 7 ? "active" : ""}
              >
                <Link to="#" className="sides">
                  <IoSettings />
                  <span> Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout">
            <Link to="#">
              <FiLogOut />
              <span> Logout</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  
    position: fixed;
    left: 0;
    background: black;
    color: var(--clr-sisi);
    list-style: none;
    height: 100vh;
    width: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  .toggle {
    display: none;
  }

  .brand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  svg {
    color: var(--clr-accent);
    font-size: 1.5rem;
  }
  span {
    font-size: 1rem;
    color: var(--clr-accent);
  }
  .links {
    display: flex;
    justify-content: center;
    color: var(--clr-dark);
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
  }
  :hover {
    background-color: mint;
  }
  
  .active {
    background-color: white
    ;
  }
  .logout {
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

`;
