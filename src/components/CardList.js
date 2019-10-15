import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return(
    <div>
      {robots.map((robot, index) => {
        return (
        <Card 
        id={robot.id} 
        name={robot.name} 
        username={robot.username} 
        email={robot.email} 
        />
        )
      })}
    </div>
  );
}

export default CardList;