import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function NavDash() {
  return (
    <Nav>
      <div>
        <h4 className="title">Hi Lesha,</h4>
        <h2>
          Welcome to <span>MY KRUSS DASHBOARD</span>
        </h2>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  .title {
    h2 {
      span {
        margin-left: 0.5rem;
      }
    }
  }
  .search {
    background-color: black;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 3rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: rgb(24, 218, 208);
    }
    input {
      background-color: transparent;
      border: none;
      color: rgb(24, 218, 208);
      letter-spacing: 0.2rem;
      &::placeholder {
        color: rgb(24, 218, 208);
      }
    }
  }
`;
