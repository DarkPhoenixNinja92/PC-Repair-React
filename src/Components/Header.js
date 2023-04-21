import './Header.css';

const Header = () => {
    return(
    <div className='header'>
        <div className='heading'>
            <h1>Marvel of Repairs</h1>
            <h3>You Broke It - We Fix It</h3>
        </div>
        <ul className="nav">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Locations</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
    )
} 

export default Header;