import React, { FC, ReactNode } from 'react';
import classes from './Card.module.css';



const Card: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};



export default Card;
