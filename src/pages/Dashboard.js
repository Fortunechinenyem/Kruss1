import React from "react";
import styled from "styled-components";
import Dash from "../components/dashcomponents/Dash";
import NavDash from "../components/dashcomponents/NavDash";
import Sidebar from "../components/dashcomponents/Sidebar";

export default function Dashboard() {
  return (
    <Div>
      <NavDash />
      <Sidebar />
      <Dash />
    </Div>
  );
}

const Div = styled.div``;
