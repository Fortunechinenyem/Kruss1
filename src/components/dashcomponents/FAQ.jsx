import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./ReusableStyles";
export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How long can a good oil change last",
    },
    {
      icon: <MdTimelapse />,
      text: "How to know if an Odometer has been doctored",
    },
    {
      icon: <IoMdCash />,
      text: "How to Make Money buying and Selling Nigerian used Cars",
    },
  ];

  return (
    <Section className="w-75 mx-auto">
      <div className="title">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => {
          return (
            <div className="faq" key={index}>
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}
  .title {
    h3 {
      color: rgb(24, 218, 208);
      letter-spacing: 0.2rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem;
      }
    }
  }
`;
