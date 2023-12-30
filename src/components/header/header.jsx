import logo from './logo.png';
import './header.css';
import Burger from './burger';

export default function Header(){
        return <header>
            <div className="container">
                <Burger/>
                <img src={logo} alt="logo" width="10%"/>
                <div className='btn-group'>
                <select name="changeLang" className='changeLang' defaultValue="ru">
                    <option value="ru">рус</option>
                    <option value="eng">eng</option>
                    <option value="каз">каз</option>
                </select>
                    <a href="login.html" className='Login'>Войти</a>
                </div>
            </div>
        </header>
}