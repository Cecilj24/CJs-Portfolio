import React from 'react'
import "../CSS/Resume.css"

function Resume() {
  return (
    <div className='Resume'>
      <div className='Skills'>
        <h1>Skills</h1>
        <div className='frontend'>
          <h2>Front-End proficiencies</h2>
          <ol classname='list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>ReactJS</li>
            <li>JQuery</li>
          </ol>
        </div>
        <div className='backend'>
          <h2>Back-End Proficiencies</h2>
          <ol className='list'>
            <li>NodeJS</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>GraphQL</li>
            <li>ExpressJS</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Resume