import React from "react";
import styled from "styled-components";
import image from "../dashcomponents/assets/lady.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Agarawu</h2>
        <h5>
          <HiOutlineLocationMarker /> Ikotun,Lagos
        </h5>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1rem;
  .image {
    max-height: 10rem;
overflow: hidden;
border-radius: 3rem;
    img {
      height: 4rem;
      width: 4rem;
      object-fit: cover;
      border-radius: 2rem,
      transition: 0.5s ease-in-out;
    }
    &:hover {
        img {
            transform: scale(1,1);
        }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
color: rgb(24, 218, 208);

    }
  }
`;
