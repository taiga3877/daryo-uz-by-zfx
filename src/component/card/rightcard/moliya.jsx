import './aside.css'

import card3Img1 from './img/card3-img1.jpg'
import card3Img2 from './img/card3-img2.jpg'
import card3Img3 from './img/card3-img3.jpg'


function Moliya() {
    return (
        <div>

            <div className="aside-card__moliya">
                <h3 className='aside-card--heading'>Moliya </h3>

            </div>
            <p className='text--span'></p>
            <p className='aside-card--text'> </p>

            <div>
                <div className='img-box'>
                    <p className='img-box__text'>
                        Iqtisodiyot
                    </p>
                </div>

                <h3 className='aside-box1--card3__heading'>
                    Zapravkalarda metan va Ai-92 benzini narxi oshgani aytilmoqda
                </h3>

                <p className='aside-box1--card1__text'>
                    20:00 / 01.10.2023
                </p>
            </div>
            <div className="aside-box1">
                <div className="aside-box1--card1">

                    <div>
                        <h3 className='aside-box1--card1__heading'>
                        Markaziy Osiyoga sarmoya kiritish ijobiy natija beradimi? 
                        </h3>

                        <p className='aside-box1--card1__text'>
                        23:00 / 29.09.2023

                        </p>
                    </div>
                    <div>
                        <img className='aside-box--card1__img' src={card3Img1} alt="card-img" />
                    </div>

                </div>

                <div className="aside-box1--card1">

                    <div>
                        <h3 className='aside-box1--card1__heading'>
                        O‘zbekistonda elektron tijorat qanday rivojlanmoqda?

                        </h3>

                        <p className='aside-box1--card1__text'>
                        17:00 / 26.09.2023
                        </p>
                    </div>
                    <div>
                        <img className='aside-box--card1__img' src={card3Img2} alt="card-img" />
                    </div>

                </div>
                <div className="aside-box1--card1">

                    <div>
                        <h3 className='aside-box1--card1__heading'>
                        “Bugungi geosiyosiy vaziyatda bitta davlatga tayanib bo‘lmaydi” — bosh vazir o‘rinbosari Jamshid Xo‘jayev

                        </h3>

                        <p className='aside-box1--card1__text'>
                        15:00 / 26.09.2023
                        </p>
                    </div>
                    <div>
                        <img className='aside-box--card1__img' src={card3Img3} alt="card-img" />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Moliya