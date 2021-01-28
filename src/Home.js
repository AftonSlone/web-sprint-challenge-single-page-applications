import React from "react";
import styled from "styled-components";
import pizza from "./Assets/Pizza.jpg";

const StyledDiv = styled.div`
  background: url(${pizza});
  background-size: cover;
  width: 100%auto;
  height: 90vh;
`;

export default function Home() {
  return <StyledDiv></StyledDiv>;
}
