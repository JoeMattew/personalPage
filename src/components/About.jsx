import { useState } from 'react'
import friends from '../assets/friends.jpg'



function About() {
  const [count, setCount] = useState(0)

  return (
    <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>
           
           <div className="about-me__body">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolorum facere, qui neque asperiores consectetur fugiat mollitia suscipit assumenda adipisci molestiae nulla distinctio officiis voluptate iure maxime voluptas nihil placeat!</p>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nihil debitis, veritatis, laudantium architecto praesentium nobis doloremque itaque totam, quisquam placeat at voluptatibus voluptates quia voluptas qui! Ab, alias quibusdam.</p>
           </div>
           
           <img src={friends} alt="" className='about-me__img'/>
           
        </section>
  )
}

export default About
