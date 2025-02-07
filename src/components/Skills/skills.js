import React from 'react';
import './skills.css';
import {Link} from 'react-scroll';
import { skills } from '../../data/info';
import styled from 'styled-components';

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: black;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    text-align: center;
    // max-width: 600px;
    color: black;
    @media (max-width: 768px) {
        margin-top: 0px;
        font-size: 16px;
    }
`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Skills=()=>{
    return(
      <>
      {/* <Title>Skills</Title>
      <CardContainer >
      {skills.map((arr, index) => (
        <React.Fragment key={index}>
          {arr.title} <br />
          {arr.skills.map((item, subIndex) => (
            <Desc key={subIndex}><img src={item.image} height={40} alt={item.name}/></Desc>
          ))}
          <br />
        </ React.Fragment >
        
      ))}
      </CardContainer> */}
  
    </>
    )
};


export default Skills;