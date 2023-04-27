import { useState } from 'react'
import friends from '../assets/friends.jpg'



function About({ t, handleClick }) {
  const [count, setCount] = useState(0)

  return (
    <section className="about-me" id="about">
           <h2 className="section__title section__title--about">{t("AboutMe.1")}</h2>
           <p className="section__subtitle section__subtitle--about">{t("AboutMeTitle.1")}</p>
           
           <div className="about-me__body">
               <p>{t("AboutMeBody.1")}</p>
           </div>
           
           <img src={friends} alt="" className='about-me__img'/>
           
        </section>
  )
}

export default About
