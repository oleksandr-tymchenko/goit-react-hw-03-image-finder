import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const SkeletonList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  /* display: flex;
  gap: 16px;
  justify-content: space-evenly;
  flex-wrap: wrap; */
`;
export const SkeletonCard = styled.li`
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  /* width: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 25px 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); */

  .image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    /* position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-size: 200% 100%; */
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);

    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }

  .content {
    padding: 20px 30px;
  }

  .title {
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .price {
    width: 30%;
    height: 20px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }

  .button {
    width: 80px;
    height: 30px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }
`;
