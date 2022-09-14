import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "./assets/lady.png";
import { cardStyle } from "./ReusableStyles";

export default function Testimonials() {
  const transactions = [
    {
      image: avatarImage,
      name: " Mobolaji Anthony",
      time: "Kruss Automotive is reliable",
      amount: "****",
    },
    {
      image: avatarImage,
      name: "Mallam Jallo Datti ",
      time: "They went above and beyond my expectation",
      amount: "*****",
    },
    {
      image: avatarImage,
      name: "Ebuka Amadi",
      time: "My Car was delivered n good shape and on time!",
      amount: "****",
    },
  ];
  return (
    <Section className="mt-5 mb-5 w-75 mx-auto">
      <div className="title mb-3">
        <h2>Testimonials</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="view" to="/about">
        View all <HiArrowNarrowRight />
      </Link>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: rgb(24, 218, 208);
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: white;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: rgb(24, 218, 208);
          }
        }
        span {
          color: rgb(24, 218, 208);
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: rgb(24, 218, 208);
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
