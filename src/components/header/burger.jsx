import './header.css';

export default function Burger(){
    function ShowMenu(){
        var navPanel = document.getElementById("navPanel");
        if (navPanel.style.left === "0px") {
            navPanel.style.left = "-250px";
        } else {
            navPanel.style.left = "0px";
        }
    }
    return(    
    <div>
        <div className='burger-button' onClick={ShowMenu}>
            <span className="triPoloski"></span>
            <span className="triPoloski"></span>
            <span className="triPoloski"></span>
        </div>
        <div className="navigation-panel" id="navPanel">
            <a href="#" className="nav-link">Главная</a>
            <a href="#" className="nav-link">О колледже</a>
            <a href="#" className="nav-link">Как поступить</a>
            <a href="#" className="nav-link">Абитуриенту</a>
        </div>
    </div>
        
    );
}