import React from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import NavDash from "./NavDash";

import OngoingWork from "./OngoingWork";
import Profile from "./Profile";

export default function Dash() {
  return (
    <Section>
      <NavDash />
      <div className="grid">
        <div className="row__one">
          <Profile />
          <Analytics />
        </div>
        <div className="row__two">
          <OngoingWork />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    .row__one {
      display: grid;
      grid-template-column: reapeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-column: reapeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  } ;
`;
