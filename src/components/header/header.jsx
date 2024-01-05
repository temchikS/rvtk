import logo from './logo.png';
import './header.css';
import Burger from './burger';

export default function Header(){
        return <header>
            <div className="container">
                
                <img src={logo} alt="logo" className='logo'/>
               <div className="logoname"> 
                <h2>Республиканский высший</h2>
                <h2>Технологический колледж</h2>
                </div>
                <div className='btn-group'>
                    <select name="changeLang" className='changeLang' defaultValue="ru">
                        <option value="ru">рус</option>
                        <option value="eng">eng</option>
                        <option value="каз">каз</option>
                    </select>
                    <a href="login.html" className='Login'>Войти</a>
                </div>
                
            </div>
            <Burger/>
        </header>
}