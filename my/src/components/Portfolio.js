import React from 'react';
import { Card } from './Form/Cards';
import Project from './Form/Project';
import "./../CSS/Portfolio.css"


function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='Projects'>
        <h1>Projects</h1>
      </div>
      <div className="items">
        {Card.map((product) => (
          <Project data={product} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio