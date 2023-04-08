import { useState } from 'react'
import github from '../assets/github.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'




function Footer() {
    const [count, setCount] = useState(0)

    return (
        <footer className='footer'>

            <a href="mailto:xkn@bk.ru" className="footer__link">Email Me</a>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link" href="https://github.com/JoeMattew"><img src={github} alt="GitHub" style={{ width: '32px', height: '32px' }} /></a></li>
                <li className="social-list__item"><a className="social-list__link" href="tg://resolve?domain=makarkarim"><img src={telegram} alt="Telegram" style={{ width: '32px', height: '32px' }} /></a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://instagram.com/matt_migrant?igshid=Mzc1MmZhNjY="><img src={instagram} alt="Instagram" style={{ width: '32px', height: '32px' }} /></a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://api.whatsapp.com/send?phone=8613538220835&text=Hello,%20how%20can%20I%20help%20you?"><img src={whatsapp} alt="Whatsapp" style={{ width: '32px', height: '32px' }} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer