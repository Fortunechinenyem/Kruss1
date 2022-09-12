import React from "react";
import styled from "styled-components";
import Dash from "../components/dashcomponents/Dash";
import OngoingWork from "../components/dashcomponents/OngoingWork";

import Sidebar from "../components/dashcomponents/Sidebar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <Div>
      <Sidebar />
      <Dash />
      <OngoingWork />
      <Footer />
    </Div>
  );
}

const Div = styled.div``;
