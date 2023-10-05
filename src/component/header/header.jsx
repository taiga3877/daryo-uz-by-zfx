import helogo from './img/logo.svg'
import heReklama from './img/header-reklama-img.jpg'
import { SearchOutlined } from '@ant-design/icons'
import './header.css'
import { NavLink } from 'react-router-dom'


export const Header = () =>{
    return(
        <div className="container">
        <div className='header'>
           <a href="#"> <img style={{
                width:'236px',
                height:'83px',
            }} src={helogo} alt="header logo" />
            </a>

            <img  style={{
                width:'899px',
                height:'85px',
            }} src={heReklama} alt="Header-reklama-img" />
        </div>

       <div className='header-box'>
       <nav className='header-nav'>
            <ul className='header-nav__item'> 
                <li className='header-nav__item--list'>
                    <select className='header-nav__item--list-select' name="" id=""> 
                    <option value="mahalliy" >Mahalliy</option>
                    <option value="mehridaryo">Mehridaryo</option>
                    <option value="boshqalar">Boshqalar</option>


                    </select>
                    </li >
                <li className='header-nav__item--list'>
                    <select className='header-nav__item--list-select' name="" id="">
                    <option value="">Markaziy Osiyo</option>
                        <option value="">Qirg'iston</option>
                        <option value="">Qozog'iston</option>
                        <option value="">Turkmaniston</option>
                        <option value="">Tojikiston</option>
                        <option value="">Afg'oniston</option>
                        

                    </select>
                     </li>
                     <NavLink to="/category/dunyo" style={{
                        color:"#fff",
                        textDecoration:"none"

                     }}>
                     <li className='header-nav__item--list'>Dunyo</li>

                     </NavLink>
                <li className='header-nav__item--list'>
                    <select className='header-nav__item--list-select' name="" id="">
                        <option value="">Pul</option>
                        <option value="">Iqtisodiyot</option>
                        <option value="">Moliya</option>
                        <option value="">Kripto</option>
                        <option value="">Biznes</option>
                        

                    </select>
                </li >
                <li className='header-nav__item--list'>
                    <select className='header-nav__item--list-select' name="" id="">
                        <option value="">Madaniyat</option>
                        <option value="">Kino </option>
                        <option value="">Kitob</option>
                        <option value="">Musiqa</option>
                        <option value="">Shou-biznes</option>

                    </select>
                </li>
                <li className="header-nav__item--list">
                    <select className='header-nav__item--list-select' name="" id=""> 
                    <option value="">Layfstal</option>
                    <option value="">Ayollar sahifasi</option>
                    <option value="">Texnologiyalar</option>
                    <option value="">Avto</option>
                    <option value="">Avto</option>
                    <option value="">Avto</option>
                    <option value="">Avto</option>
                    <option value="">Avto</option>


                    </select>
                </li>
                <li className="header-nav__item--list">Sport</li>
                <li className="header-nav__item--list">Kolumnistlar</li>
                <li className="header-nav__item--list">Multimedia</li>
            </ul>
       

            </nav>
        <div className='header-box__card'>
            <button style={{
                backgroundColor:"#000",
                color:'#fff',
                border:'none'
            }}>dark</button>
            <SearchOutlined />
            <p>UZB</p>
            <p>==</p>
        </div>
      
       </div>
       
        </div>
    )
}