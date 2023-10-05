import './leftMain.css'


import mahhalliyImg from './img/mahalliy-img.jpg'
import mahhalliyImg1 from './img/mahalliy-img1.jpg'
import mahhalliyImg2 from './img/mahalliy-img2.jpg'
import mahhalliyImg3 from './img/mahalliy-img3.jpg'
import { NavLink } from 'react-router-dom'




function MahalliyCard() {
    return (
        <div>


            <div className="aside-card__dunyo">

                <h3 className='aside-card__dunyo--heading'>Mahalliy </h3>


            </div>
            <p className='text-dunyo--span'></p>
            <p className='aside-card__dunyo--text'> </p>




            <div className="card-leftDunyo">


                <div className='card-leftDunyo--right'>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={mahhalliyImg} alt="img" />
                        <div>
                            <h4 className="card-leftDunyo--right__card--heading">
                                O‘zbekistonning 9 ta viloyatida sel-suv toshqini xavfi eʼlon qilindi
                            </h4>

                            <p className="card-leftDunyo--right__card--text">
                                15:00 / 04.10.2023
                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={mahhalliyImg1} alt="img" />
                        <div>
                            <h4 className="card-leftDunyo--right__card--heading">
                                Shavkat Mirziyoyev Putin taklifiga binoan 5-oktyabr kuni Rossiyaga boradi
                            </h4>

                            <p className="card-leftDunyo--right__card--text">
                                15:00 / 04.10.2023

                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={mahhalliyImg2} alt="img" />
                        <div>
                            <h4 className="card-leftDunyo--right__card--heading">

                                “Ular qahramon”— mutaxassis 160 kilometrlik tirbandlikda qolib ketgan o‘zbek haydovchilari haqida

                            </h4>

                            <p className="card-leftDunyo--right__card--text">
                                13:00 / 04.10.2023


                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={mahhalliyImg3} alt="img" />
                        <div>
                            <h4 className="card-leftDunyo--right__card--heading">

                                Kanada elchisi O‘zbekistondagi diplomatik missiyasini yakunlamoqda
                            </h4>

                            <p className="card-leftDunyo--right__card--text">
                                13:00 / 04.10.2023

                            </p>
                        </div>
                    </div>
                </div>

                <div>


                    <div className="card-leftDunyo--left--mahalliy">
                        <NavLink to="/category/mahalliy" style={{
                            color: '#000',
                            textDecoration: 'none',
                        }}>
                            <p className="card-leftDunyo--left__text">
                                MAHALLIY
                            </p>
                        </NavLink>


                    </div>
                    <h4 className="card-leftDunyo--left__heading">
                        O‘zbekistonda dollar kursi ikki kunlik ko‘tarilishdan so‘ng pastladi
                    </h4>

                    <p className='card-leftDunyo--left__text1'>
                        16:00 / 04.10.2023

                    </p>


                    <p className='card-leftDunyo--left__dec'>
                        Markaziy bank xorijiy valyutalarning 5-oktyabrda amalda bo‘ladigan qiymatini e’lon qildi...

                    </p>
                </div>

            </div>
            <NavLink to='category/mahalliy' style={{
                            color: '#000',
                            textDecoration: 'none',
                        }}>
            <button className="card-leftDunyo--btn"> <b>MAHALLIY</b>-ENG SO'NGGI XABARLAR </button>

            </NavLink>

        </div>
    )
}

export default MahalliyCard