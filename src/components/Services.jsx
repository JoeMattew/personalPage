import { useState } from 'react'



function Services({ t, handleClick }) {
  const [count, setCount] = useState(0)

  return (
    <section className="my-services" id="services">
            <h2 className="section__title section__title--services">{t('ServTitle.1')}</h2>
            <div className="services">
                <div className="service">
                    <h3>{t('ServBody1Title.1')}</h3>
                    <p>{t('ServBody1.1')}</p>
                </div>
                
                <div className="service">
                <h3>{t('ServBody2Title.1')}</h3>
                    <p>{t('ServBody2.1')}</p>
                </div> 
                
                <div className="service">
                <h3>{t('ServBody3Title.1')}</h3>
                    <p>{t('ServBody3.1')}</p>
                </div>
            </div> 
            
            <a href="#work" className="btn">{t('ServEnd.1')}</a>
        </section>
  )
}

export default Services
