import logo from '/assets/airbnb-logo.png'
import './header.css'

function Header() {
    return(
        <nav>
            <img id='logo' src={logo} alt='airbnb logo'></img>
        </nav>
    )
}
export default Header