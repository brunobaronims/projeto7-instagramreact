import logo from '../img/logo.png';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <ion-icon name="logo-instagram"/>
        <img src={logo} alt='Logo'/>
      </div>
      <div className='navbar-search'></div>
      <div className='navbar-icons'></div>
    </div>
  );
}

export default NavBar;