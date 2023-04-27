import { useState } from 'react'
import ava from '../assets/ava.jpg'
// import { useTranslation } from 'react-i18next';


function Intro({ t, handleClick }) {
  const [count, setCount] = useState(0)

 

  return (
    <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
            {t('Hi.1')} <strong>{t('Name.1')}</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={ava} alt="" className='intro__img'/>
        </section>
  )
}

export default Intro
