import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h4>N10500</h4>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Discount</h5>
          <h4>N5000</h4>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>New Fixes</h5>
          <h4>3</h4>
        </div>
        <div className="logo">
          <BiGroup />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Activity</h5>
          <h4>N300</h4>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: rgb(24, 218, 208);
        color: black;
        svg {
            color: white;
        }
    } 
    .logo {
        background-color: black;
        border-radius: 3rem;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:1.5rem;
        svg {
            font-size: 1.5rem;
        }
    }
  }
`;
