import './main.css';
import rvtk from './rvtk.png';

export default function Main(){
    return(
        <div>
            <div className='our-college'>
                <div className='left-side'>
                    <h1>Республиканский высший технологический колледж</h1>
                    <div className='links'>
                        <div className="rea">
                            <h2>wer</h2>
                        </div>
                    </div>    
                </div>
                <img className='rvtk-image' src={rvtk}  alt="rvtk-image" width="70%"/>
            </div>
            
        </div>
    );
}