import React from 'react'
import { DiGithubBadge } from "react-icons/di"
import { AiOutlineLinkedin } from "react-icons/ai"
import { MdOutlineMailOutline } from 'react-icons/md'
import "../../CSS/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='Links'>
        <a href='https://github.com/Cecilj24'>
          <DiGithubBadge size="5rem" />
        </a>
        <a href='https://www.linkedin.com/in/cecil-john-b2a47513b/'>
          <AiOutlineLinkedin size="5rem" />
        </a>
        <a href='https://mail.yahoo.com/d/compose/4241870153'>
          <MdOutlineMailOutline size="5rem" />
        </a>
      </div>
      <p> &copy; 2023 cjsportfolio.com </p>
    </div>
  )
}

export default Footer


