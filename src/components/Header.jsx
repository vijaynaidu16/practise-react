import { useState } from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  }

  return (
    <>
    <nav>
        <a><Link><h1>Data Sync</h1></Link></a>
        <ul>
            <li>Products</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Pricing</li>
        </ul>
        <button className='btn1' onClick={handleLogin}>{login ? "login" : "Logout"}</button>
    </nav>
    </>
  )
}

export default Header