import './aside.css'
import card1Img from './img/card1-img.jpg'
import card1Img1 from './img/card1-img1.jpg'
import card1Img2 from './img/card1-img2.jpg'
import card1Img3 from './img/card1-img3.jpg'
import card1Img4 from './img/card1-img4.jpg'
import card1Img5 from './img/card1-img5.jpg'
import card1Img6 from './img/card1-img6.jpg'
import card1Img7 from './img/card1-img7.jpg'
import card1Img8 from './img/card1-img8.jpg'
import card1Img9 from './img/card1-img9.jpg'






export const AsideCard = () =>{
    return(
        <div className="container">
    <div className="aside">

    
        <div className="aside-card">
            <h3 className='aside-card--heading'>So'nggi yangiliklarga o'tish</h3>
           
        </div>
        <p className='text--span'></p>
        <p className='aside-card--text'> </p>

        <div className='aside-box'>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
            Nobel mukofoti tarixi, kimlarga va qancha pul mukofoti beriladi?
            </h3>

            <p className='aside-box--card1__text'>
            BUGUN, 20:35
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Britaniya hukumati xorijdagi qamoqxonalarni ijaraga olishga qaror qildi
            </h3>

            <p className='aside-box--card1__text'>
            KECHA, 21:50
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img5} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Prezidentning xorijiy tashriflaridan asosiy maqsad nimalar ekani aytildi
            </h3>

            <p className='aside-box--card1__text'>
            BUGUN, 20:35
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img2} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          OCHL. “Al-Fayha” “Paxtakor” ustidan ishonchli hisobda g‘alaba qozondi
            </h3>

            <p className='aside-box--card1__text'>
            KECHA, 22:10
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img6} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Instagram: Dilshodbek Kattabekov uylandi, Munisa Rizayeva onasining tug‘ilgan...
            </h3>

            <p className='aside-box--card1__text'>
            BUGUN, 20:35
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img4} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Qozog‘istonda ko‘mir eksportiga qo‘yilgan taqiq uzaytirildi
            </h3>

            <p className='aside-box--card1__text'>
            BUGUN, 20:35
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img7} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Tan olinmagan Tog‘li Qorabog‘ Respublikasi sobiq prezidentlari hibsga olindi
            </h3>

            <p className='aside-box--card1__text'>
            KECHA, 22:25
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img1} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Rossiyada urushdan qaytgan “vagnerchi” uyga o‘t qo‘yib, ayollarni yoqib yubordi
            </h3>

            <p className='aside-box--card1__text'>
            KECHA, 22:10
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img3} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Toshkentda Qatar amiri taʼsis etgan korrupsiyaga qarshi kurashda erishilgan yutuqlar...
            </h3>

            <p className='aside-box--card1__text'>
            KECHA, 23:10

            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img8} alt="card-img" />
          </div>
        </div>
        <div className="aside-box--card1">
          <div>
          <h3 className='aside-box--card1__heading'>
          Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi ulkan
            </h3>

            <p className='aside-box--card1__text'>
            BUGUN, 20:15
            </p>
          </div>
          <div>
            <img  className='aside-box--card1__img' src={card1Img9} alt="card-img" />
          </div>
        </div>
        </div>

        <div className="aside-card__tavsif">
            <h3 className='aside-card--heading'>Tavsiya etamiz</h3>
           
        </div>
        <p className='text--span'></p>
        <p className='aside-card--text'> </p>
        </div>
        </div>
    )
}