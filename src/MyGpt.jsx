import React from 'react'
import './MyGpt.css'
import Feature from './Feature'

const MyGpt = () => {
  return (
    <div className='My-gpt' id='Wtu'>
      <div className="feature">
        <Feature title="MY GPT" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="heading-content">
        <h1 className='gradient__text'>The possibility are beyound your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="container">
        
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default MyGpt;
