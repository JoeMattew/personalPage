import { useState } from 'react'



function Services() {
  const [count, setCount] = useState(0)

  return (
    <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>I have a passion for creating dynamic web applications that engage and delight users. With my knowledge of React and other front-end technologies, I can build a responsive and interactive user experience that will keep your users coming back.</p>
                </div>
                
                <div className="service">
                    <h3>API</h3>
                    <p>I specialize in building front-end interfaces that interact with APIs, allowing users to perform tasks such as creating, reading, updating, and deleting data. I like building intuitive user interface that seamlessly integrates with APIs.</p>
                </div> 
                
                <div className="service">
                    <h3>Stack</h3>
                    <p>My front-end development stack includes React, HTML, CSS, and JavaScript. I have experience using these technologies to build complex web applications and can help you develop a solution that meets your specific requirements.</p>
                </div>
            </div> 
            
            <a href="#work" className="btn">My Work</a>
        </section>
  )
}

export default Services
