import { useState } from 'react'
import ava from '../assets/ava.jpg'


function Intro() {
  const [count, setCount] = useState(0)

  return (
    <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Marat Saitov</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={ava} alt="" className='intro__img'/>
        </section>
  )
}

export default Intro
