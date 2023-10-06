import './leftMain.css'

import lyfImg from './img/lyf-img.jpg'
import lyfImg1 from './img/lyf-img1.jpg'
import lyfImg2 from './img/lyf-img2.jpg'
import lyfImg3 from './img/lyf-img3.jpg'
import lyfImg4 from './img/lyf-img4.jpg'
import lyfImg5 from './img/lyf-img5.jpg'
import { NavLink } from 'react-router-dom'


function LifestyleCard() {
    return (
        <div> 
            <div className="aside-card__dunyo">
                <h3 className='aside-card__dunyo--heading'>Lifestyle </h3>
            </div>
            <p className='text-dunyo--span'></p>
            <p className='aside-card__dunyo--text'> </p>

            <div >
                <div className="card-leftDunyo   card-leftDunyo1">


                    <div className="card-leftDunyo--left--lifestyle">
                    <NavLink style={{
                        textDecoration:'none',
                        color:'#000'
                    }} to='./category/mahalliy'>
                    <p className="card-leftDunyo--left--lifestyle__text">
                            SALOMATLIK
                        </p>
                          </NavLink>

                        <h4  className='card-leftDunyo--left--lifestyle__heading'>
                            Nima uchun tomoq achishadi? Ushbu yoqimsiz alomatdan qanday qutulish mumkin?
                        </h4>
                        <span className='card-leftDunyo--left--lifestyle__span'>
                            15:00 / 04.10.2023
                        </span>


                    </div>
                    <div className="card-leftDunyo--left--lifestyle1">
                    <NavLink style={{
                        textDecoration:'none',
                        color:'#000'
                    }} to='./category/mahalliy'>
                        <p className="card-leftDunyo--left--lifestyle__text">
                            LAYFSTAL
                        </p>
                    </NavLink>

                        <h4 className='card-leftDunyo--left--lifestyle__heading'>
                            Immunitet nima sababdan pasayadi va uni qanday qilib ko‘tarish mumkin?
                        </h4>
                        <span className='card-leftDunyo--left--lifestyle__span'>
                            15:00 / 04.10.2023
                        </span>
                    </div>
                </div>
                <div className='card-leftDunyo--right__lifestyle'>
                <div className="aaaaaaaaaa">
                <div className='card-leftDunyo--right--lyf'>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                       Mashhurlar merosi: Jahon yulduzlaridan kimlar boyligini farzandlariga qoldirmoqchi emas? 
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        12:00 / 04.10.2023
    
                        </p>
                       </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg1} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                       “Garri Potter” franshizasida eng ko‘p ekran vaqtiga ega bo‘lgan qahramonlar (foto)
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        09:00 / 04.10.2023

      
                        </p>
                       </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg2} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                       Mashhurlar qanday qilib shartnoma imzolamasdan, taniqli brendlarning millionlab dollar foyda olishiga sababchi bo‘ladi?...
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        18:00 / 03.10.2023

     
                        </p>
                       </div>
                    </div>
                   
                </div>
                </div>
                <div className="bbbb">
                <div className='card-leftDunyo--right--lyf '>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg3} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                       Magniy tanqisligi va noto‘g‘ri ovqatlanish: Tez charchab qolishning asosiy sabablari 
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        11:00 / 04.10.2023
    
                        </p>
                       </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg4} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                       Yurak sanchib og‘riganda: Inson hayotini saqlab qolishi mumkin bo‘lgan maslahatlar  
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        18:00 / 03.10.2023

      
                        </p>
                       </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={lyfImg5} alt="img" />
                       <div>
                       <h4 className="card-leftDunyo--right__card--heading">
                        Iordaniya qirolichasi Raniya al-Abdullaning bir xil vaznda yurishining siri nimada?
                        </h4>

                        <p className="card-leftDunyo--right__card--text">
                        17:00 / 03.10.2023

     
                        </p>
                       </div>
                    </div>
                   
                </div>
                </div>
                </div>
                <NavLink to='./category/mahalliy'>
            <button className="card-leftDunyo--btn"> <b>LAYFSTAL</b>-ENG SO'NGGI XABARLAR </button>
                    </NavLink>
        </div>
        </div>
    )
}

export default LifestyleCard