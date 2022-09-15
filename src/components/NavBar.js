import logo from '../img/logo.png';

function NavBar() {
  return (
    <header className='navbar'>
      <div className='navbar-content'>  
        <div className='navbar-logo'>
          <ion-icon name="logo-instagram" />
          <img src={logo} alt='Logo' />
        </div>
        <input placeholder='Pesquisar'></input>
        <div className='navbar-icons'>
          <ion-icon name="paper-plane-outline" />
          <ion-icon name="compass-outline" />
          <ion-icon name="heart-outline" />
          <ion-icon name="person-outline" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;