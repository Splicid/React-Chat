import './navbar.css';
import logo from '../Assets/img/Icon.jpg';

const Navbar = () => {

    const handle = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
    
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
    return (
        <div>
            <header>
            <nav className="navbar">
            <img className="logo" src="#" alt="logo" />
                <ul className='nav-menu'>
                    <li className='nav-item'><a href="#">Home</a></li>
                    <li className='nav-item'><a href="#">Chat</a></li>
                    <li className='nav-item'><a href="#">About</a></li>
                    <li className='nav-item'><a href="#">Mission</a></li>
                </ul>
                <div className='hamburger' onClick={handle}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
            </header>
        </div>
    )
}


export default Navbar;