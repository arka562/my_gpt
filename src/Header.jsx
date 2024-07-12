import React from 'react'
import './Header.css'
import people from './assets/people.png'
import ai from './assets/ai.webp';

const Header = () => {
  return (
    <div className='header' id="home">
      <div className="header-content">
        <div className="heading">
          <h1>Let Us Make Something Innovative With GPT</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus iure, sint ipsum eveniet numquam necessitatibus perspiciatis id itaque autem aut, sapiente asperiores minus similique! Delectus nulla eum officia molestiae reiciendis. Dolor, fugiat quo eius totam itaque natus nesciunt, optio cumque, molestiae maxime ab dolorum harum nam minus odio magnam corrupti.</p>
        </div>  
        <div className="content">
          <input type='email' placeholder='Your email' />
          <button type="button">Get Started</button>
        </div>
      
        <div className="content-img">
          <img src={people} alt="people" />
          <p>1500 people had accessed this site in last 24 hours</p>
        </div>
      </div>  
      <div className="ai-img">
        <img src={ai} alt="ai" />
      </div>
      </div>  
  
  )
}

export default Header
