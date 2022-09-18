export default function NavBar() {
  return (
    <header className='navbar'>
      <div className='navbar-content'>  
        <div className='navbar-logo'>
          <ion-icon name="logo-instagram" />
          <div />
          <img src='./img/logo.png' alt='Logo' />
        </div>
        <img src='./img/logo.png' className='mobile-logo' alt='Mobile Logo' />
        <input placeholder='Pesquisar'></input>
        <div className='navbar-icons'>
          <ion-icon class='navbar-message' name="paper-plane-outline" />
          <ion-icon name="compass-outline" />
          <ion-icon name="heart-outline" />
          <ion-icon name="person-outline" />
        </div>
      </div>
    </header>
  );
}