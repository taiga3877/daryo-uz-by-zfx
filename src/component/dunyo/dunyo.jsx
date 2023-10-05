
import { NavLink } from 'react-router-dom'
import './dunyo.css'

import dunyoImg from './img/dunyo-img.jpg'
import dunyoImg1 from './img/dunyo-img1.jpg'
import dunyoImg2 from './img/dunyo-img2.jpg'
import dunyoImg3 from './img/dunyo-img3.jpg'
import dunyoImg4 from './img/dunyo-img4.jpg'
import dunyoImg5 from './img/dunyo-img5.jpg'
import dunyoImg6 from './img/dunyo-img6.jpg'
import dunyoImg7 from './img/dunyo-img7.jpg'
import dunyoImg8 from './img/dunyo-img8.jpg'
// import reklama from './img/reklama-dunyo-img.webg'


export const Dunyo = () => {
  return (
    <div className='card--dunyo'>
      <h2 className='card--dunyo__heading'>DUNYO </h2>

      <div className="card--dunyo__box">
        <div>
          <div className="card--dunyo__box--wrapper">
            <NavLink to="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text'>DUNYO</p>

            </NavLink>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Bayden Ukrainaga ATACMS raketalarini yetkazib berish haqidagi savolga javob berdi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 10:22

          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            OAV AQSH prezidenti Ukrainaga kassetali o‘q-dorilar bilan birga ATACMS raketalarini berishga qaror qilgani haqida xabar bergandi
          </p>
        </div>

        <div>
          <div className="card--dunyo__box--wrapper">
            <img className='card--dunyo__box--wrapper' src={dunyoImg} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Yaponiyada 6,6 magnitudali zilzila yuz berdi. Sunami xavfi e’lon qilindi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 09:05


          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Sohilbo‘yi hududlarida va daryolar yaqinida yashovchi odamlarga balandroq yerga chiqish tavsiya etilmoqda

          </p>
        </div>
      </div>

      <div className="card--dunyo__box">
        <div>
          <div className="card--dunyo__box--wrapper">
            <img className='card--dunyo__box--wrapper' src={dunyoImg1} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Shimoliy Koreya mamlakatdagi yadro reaktorining ishini to‘xtatdi — OAV
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 17:39
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Janubiy Koreya va AQSH buni yadro qurolini yaratish belgisi deb baholadi


          </p>
        </div>

        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg2} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Buyuk Britaniyada 2008-yildan keyin tug‘ilganlarga tamaki sotish taqiqlanishi mumkin
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 17:03



          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Bunday tashabbus Britaniya bosh vaziri Rishi Sunak tomonidan ilgari surilmoqda

          </p>
        </div>
      </div>
      <div className="card--dunyo__box">
        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg3} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1' style={{
              
              }}>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Adabiyot bo‘yicha bu yilgi Nobel mukofoti qaysi yozuvchiga berilishi aniq bo‘ldi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 16:32



          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Nobel qo‘mitasining press-relizida mukofot unga “ta’riflash qiyin bo‘lgan tuyg‘ularni ifodalovchi innovatsion pyesalari va nasri uchun” berilgani ayti...

          </p>
        </div>

        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg4} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1' style={{
                left:'3px',
                bottom:"7px"
              }}>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Ramzan Qodirovning tanqidchisi Qirg‘izistondan deportatsiya qilinadi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 15:29
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Mansur Movlayev dastlab Qirg‘izistonda olti oy koloniyada jazo o‘taydi
          </p>
        </div>
      </div>
      <div className="card--dunyo__box">
        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg5} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Amerikaga piyoda ketayotganlar, yomg‘ir so‘rash uchun qilingan ibodat, yerda yotgan bemor ona — 4-oktyabr suratlari
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            KECHA, 23:13
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Eron dronlar yordamida mashg‘ulotlar o‘tkazdi
          </p>
        </div>

        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg6} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            AQSH Erondan musodara qilingan qurol va o‘q-dorilarni Ukrainaga yuboradi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            KECHA, 21:30
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            AQSH Markaziy qo‘mondonligi bunday qaror haqida shu hafta oxirigacha e’lon qilishi kutilmoqda
          </p>
        </div>
      </div>
      <div className="card--dunyo__box">
        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg7} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Green Card DV-2025 mavsumi uchun ro‘yxatdan o‘tish boshlandi. Arizani to‘g‘ri to‘ldirish bo‘yicha yo‘riqnoma
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            KECHA, 21:01
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Bugun 4-oktyabr kuni Toshkent vaqti bilan soat 21:00 da Green Card DV-2025 mavsumi uchun ro‘yxatdan o‘tish boshlandi. Ro‘yxatdan o‘tish 2023-yil 7-noy...
          </p>
        </div>

        <div>
          <div className="card--dunyo__box--wrapper">
            <img className="card--dunyo__box--wrapper" src={dunyoImg8} alt="" />
            <a href="/category/dunyo" style={{
              color: "#000",
              textDecoration: "none"

            }}>
              <p className='card--dunyo__box--wrapper--text1'>DUNYO</p>

            </a>
          </div>
          <h3 className='card--dunyo__box--wrapper--heading'>
            Yaponiya Fukusima AESdagi suvning ikkinchi partiyasini okeanga chiqarishni boshladi
          </h3>
          <span className='card--dunyo__box--wrapper--span'>
            BUGUN, 12:12
          </span>
          <p className='card--dunyo__box--wrapper--dec'>
            Bu safar 7,8 ming tonnaga yaqin tozalangan suvni okeanga to‘kish rejalashtirilmoqda
          </p>
        </div>
      </div>

      <button className='card--dunyo__box--btn'>
        <b>DUNYO </b>- KO'PROQ XABARLARNI YUKLASH
      </button>



      <a target={'_blank'} href="https://www.ipotekabank.uz/private/crediting/micro_new/">
            <img style={{
              width:'770px',
            }} src='https://avatars.mds.yandex.net/get-adfox-content/2367573/230913_adfox_2627989_7692881.baed107e3f956903fdabf77d0d065cd0.jpg/optimize.webp' alt="" />
      </a>
    </div>
  )
}