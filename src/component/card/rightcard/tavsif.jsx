import './aside.css'
import card2Img from './img/card2-img.jpg'
import card2Img1 from './img/card2-img1.jpg'
import card2Img2 from './img/card2-img2.jpg'
import card2Img3 from './img/card2-img3.jpg'

function Tavsif(){
    return(
        <div>

<div className="aside-card__tavsif">
                    <h3 className='aside-card--heading'>Tavsiya etamiz</h3>

                </div>
                <p className='text--span'></p>
                <p className='aside-card--text'> </p>

                <div className="aside-box1">
                    <div className="aside-box1--card1">
                        <div>
                            <img className='aside-box--card1__img' src={card2Img} alt="card-img" />
                        </div>
                        <div>
                            <h3 className='aside-box1--card1__heading'>
                                “Oyiga 80-100 mln so‘mlik dorilar sotilib, o‘zaro taqsimlab kelingan”. “Dok-1 Maks” sudida...
                            </h3>

                            <span className='aside-box1--card1__text'>
                                17:00 / 03.10.2023
                            </span>
                        </div>

                    </div>
                    <div className="aside-box1--card1">
                        <div>
                            <img className='aside-box--card1__img' src={card2Img1} alt="card-img" />
                        </div>
                        <div>
                            <h3 className='aside-box1--card1__heading'>

                                Farg‘onada tuman bandlikka ko‘maklashish bo‘limi boshlig‘i YTHga uchrab, shifoxonaga...
                            </h3>

                            <p className='aside-box1--card1__text'>
                            13:00 / 03.10.2023
                            </p>
                        </div>

                    </div>
                    <div className="aside-box1--card1">
                        <div>
                            <img className='aside-box--card1__img' src={card2Img2} alt="card-img" />
                        </div>
                        <div>
                            <h3 className='aside-box1--card1__heading'>
                            Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi ulkan sakkizoyoq — 3-...
                            </h3>

                            <p className='aside-box1--card1__text'>
                            23:00 / 03.10.2023
                            </p>
                        </div>

                    </div>
                    <div className="aside-box1--card1">
                        <div>
                            <img className='aside-box--card1__img' src={card2Img3} alt="card-img" />
                        </div>
                        <div>
                            <h3 className='aside-box1--card1__heading'>
                            AQSHning O‘zbekistondagi elchixonasi Green Card’da ishtirok etmoqchi bo‘lganlarga 10 muhim
                            </h3>

                            <p className='aside-box1--card1__text'>
                            11:00 / 02.10.2023
                            </p>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Tavsif