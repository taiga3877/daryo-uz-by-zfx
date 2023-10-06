import './footer.css'
import { InstagramOutlined, YoutubeOutlined, FacebookOutlined, TwitterOutlined, MobileOutlined } from '@ant-design/icons'
import telegram from './telegram.svg'

export const Footer = () => {
    return (
        <div style={{
            backgroundColor: '#0f0f0f',
            marginTop:'70px',
            

        }}>
            <div >
                <div className="container">
                    <img className='footer-card--img' src="https://daryo.uz/logo/logo-white.png" alt="footer-logo" />

                    <p className="footer-card--text">
                        “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz
                    </p>

                    <div className="footer-card--ijtimoiy">
                        <div className='footer--tg'>
                            <a href="https://t.me/Daryo" target={'_blank'}> <img className='footer--tg--teleg' style={{
                                width: '14px',
                                height: '16px',
                            }} src={telegram} alt="" /></a>
                        </div>

                        <div className='footer--tg'>
                            <a className='footer--card--link' href="https://www.youtube.com/@Daryo_yangiliklari" target={'_blank'}>
                                <span className='footer-card--ins'> <YoutubeOutlined /></span>
                            </a>
                        </div>

                        <div className='footer--tg'>
                            <a className='footer--card--link' href="https://www.facebook.com/daryouz.rasmiy" target={'_blank'}>
                                <span className='footer-card--ins'> <FacebookOutlined /></span>
                            </a>
                        </div>

                        <div className='footer--tg'>
                            <a className='footer--card--link' href="https://www.instagram.com/daryo.rasmiy" target={'_blank'}>
                                <span className='footer-card--ins'> <InstagramOutlined /></span>
                            </a>
                        </div>

                        <div className='footer--tg'>
                            <a className='footer--card--link' href="https://twitter.com/daryo_uz" target={'_blank'}>
                                <span className='footer-card--ins'><TwitterOutlined /></span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: '#000',
            }}>
                <div className="footer-card--bottom container">
                    <div>
                        <p className="footer-card--bottom__text">
                            © «Simple Networking Solutions» MChJ, 2013–2023
                        </p>
                    </div>

                    <div>
                        <p className='footer-card--bottom__text'> <span className='footer-card--bottom__span'>18+</span>
                            Yosh bo‘yicha cheklov


                        </p>
                    </div>
                    <div>
                        <p className='footer-card--bottom__text'> <span className='footer-card--bottom__span'><MobileOutlined /></span>
                            Xato topdingizmi? Ctrl+Enter’ni bosing
                        </p>
                    </div>
                    <div>
                        <p className='footer-card--bottom__text'>
                            Foydalanish shartlari    <span className='footer-span'>|</span>
                            Maxfiylik siyosati    <span className='footer-span'>|</span>
                            Reklama
                        </p>
                    </div>

                </div>
            </div>
        </div>


    )
}