import { useState } from 'react'
import todo from '../assets/todo.jpg'
import calc from '../assets/calc.jpg'
import recipe from '../assets/recipe.jpg'
import weather from '../assets/weather.jpg'




function Work() {
    const [count, setCount] = useState(0)

    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My work</h2>
            <p className="section__subtitle"></p>

            <div className="portfolio">
                
                <a href="https://gilded-swan-006b29.netlify.app/" className="portfolio__item">
                    <img src={todo} alt="" className="portfolio__img" />
                </a>

                <a href="https://recipe-app-c5262.web.app/" className="portfolio__item">
                    <img src={recipe} alt="" className="portfolio__img" />
                </a>
                
                <a href="https://splendorous-eclair-301e54.netlify.app/" className="portfolio__item">
                    <img src={calc} alt="" className="portfolio__img" />
                </a>

                <a href="https://joemattew.github.io/" className="portfolio__item">
                    <img src={weather} alt="" className="portfolio__img" />
                </a>

                

                
            </div>
        </section>

    )
}

export default Work

