import React from "react";
import styled from "styled-components";
import Dash from "../components/dashcomponents/Dash";

import Sidebar from "../components/dashcomponents/Sidebar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <Div>
      <Sidebar />
      <Dash />
      <Footer />
    </Div>
  );
}

const Div = styled.div``;
