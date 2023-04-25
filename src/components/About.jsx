import { useState } from 'react'
import friends from '../assets/friends.jpg'



function About() {
  const [count, setCount] = useState(0)

  return (
    <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Designer & developer</p>
           
           <div className="about-me__body">
               <p>I'm a versatile individual with a passion for learning and exploring new things. I started out as an English teacher, where I honed my communication and interpersonal skills. I've always had a love for travel and I've been fortunate enough to explore many different countries and cultures. More recently, I discovered my passion for coding and became a frontend developer. It's been a challenging yet rewarding journey, and I'm excited to continue growing and improving in this field</p>
           </div>
           
           <img src={friends} alt="" className='about-me__img'/>
           
        </section>
  )
}

export default About
