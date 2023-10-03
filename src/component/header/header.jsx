import helogo from './img/logo.svg'
import heReklama from './img/header-reklama-img.jpg'
import './header.css'


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
        </div>
    )
}