import './footer.css'
import insta from './insta.png'
import tg from './telega.png'
import youtube from './youtube.png'
export default function Footer(){
    return(
        <footer>
            <div className='imgfooter'>
                <img src={insta} alt="" />
                <img src={tg} alt="" />
                <img src={youtube} alt="" />
            </div>
        <div>
            <p>Контакты</p>

            <ul>
                <li>+7 (7112) 51‒35‒70</li>
                <li>+7 (7112) 50‒34‒20</li>
                <li>+7 (7112) 25‒50‒52</li>
                <li>+7‒705‒212‒16‒07</li>
                <li>+7‒776‒919‒76‒2</li>
            </ul>
        </div>
      </footer>
      
    );
}