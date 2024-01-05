import './main.css';
import rvtk from './rvtk.png'
export default function Our_college(){
    return(<div className='our-college'>
    <div className='left-side'>
        <h1>Республиканский высший технологический колледж</h1>
          <p>Oбъявляет набор на специальности по самым востребованным отраслям экономики:</p>
          <p>Нефтегазовое дело</p>
          <p>Телекоммуникации и IT-технологии.</p> 
          <p>Осуществляется набор по государственному заказу (грант).</p>
          <p>Адрес🗺️:</p>
          <p>г. Уральск, Фрунзе 20/1 </p>
          <p>Контакты📞:</p>
          <p>8(7112) 51-35-70</p>
          <p> 8-702-952-74-04</p>
        <div className='links'>
            <a href="#" className="link">О колледже</a>
            <a href="#" className="link">Как поступить</a>
        </div>    
    </div>
    <img src={rvtk} alt="rvtk-image" width="100%"/>
</div>);
}