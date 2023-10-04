import './leftMain.css'


import rightImg from './img/right-img.jpg'
import rightImg1 from './img/right-img1.jpg'
import rightImg2 from './img/right-img2.jpg'
import rightImg3 from './img/right-img3.jpg'


function LifestyleCard() {
    return (
        <div> 
            <div className="aside-card__dunyo">
                <h3 className='aside-card__dunyo--heading'>Lifestyle </h3>
            </div>
            <p className='text-dunyo--span'></p>
            <p className='aside-card__dunyo--text'> </p>

            <div >
                <div className="card-leftDunyo">


                    <div className="card-leftDunyo--left--lifestyle">
                        <p className="card-leftDunyo--left--lifestyle__text">
                            SALOMATLIK
                        </p>

                        <h4  className='card-leftDunyo--left--lifestyle__heading'>
                            Nima uchun tomoq achishadi? Ushbu yoqimsiz alomatdan qanday qutulish mumkin?
                        </h4>
                        <span className='card-leftDunyo--left--lifestyle__span'>
                            15:00 / 04.10.2023
                        </span>


                    </div>
                    <div className="card-leftDunyo--left--lifestyle1">
                        <p className="card-leftDunyo--left--lifestyle__text">
                            LAYFSTAL
                        </p>

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
                        <img className='card-leftDunyo--right__card--img' src={rightImg} alt="img" />
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
                        <img className='card-leftDunyo--right__card--img' src={rightImg1} alt="img" />
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
                        <img className='card-leftDunyo--right__card--img' src={rightImg2} alt="img" />
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
                        <img className='card-leftDunyo--right__card--img' src={rightImg} alt="img" />
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
                        <img className='card-leftDunyo--right__card--img' src={rightImg1} alt="img" />
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
                        <img className='card-leftDunyo--right__card--img' src={rightImg2} alt="img" />
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

            <button className="card-leftDunyo--btn"> <b>LAYFSTAL</b>-ENG SO'NGGI XABARLAR </button>

        </div>
        </div>
    )
}

export default LifestyleCard