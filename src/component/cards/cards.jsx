import React from 'react';
import { Card } from '../card/card';
import './cards.css'

function Cards() {
  return (
    <div className='cards-container' >
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
}

export default Cards;
