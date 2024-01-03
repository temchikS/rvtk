import './main.css';
import rvtk from './rvtk.png'
export default function Our_college(){
    return(<div className='our-college'>
    <div className='left-side'>
        <h1>Республиканский высший технологический колледж</h1>
        <div className='links'>
            <a href="#" className="link">О колледже</a>
            <a href="#" className="link">Как поступить</a>
        </div>    
    </div>
    <img src={rvtk}  alt="rvtk-image" width="100%"/>
</div>);
}