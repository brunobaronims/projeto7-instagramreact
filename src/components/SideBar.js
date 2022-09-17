import Usuario from "./Usuario/Usuario";
import Sugestoes from "./Sugestoes/Sugestoes";

export default function SideBar() {
  const userData = require('./Usuario/UsuarioData.json');
  const links = ['Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras',
    'Privacidade', 'Termos', 'Localizações', 'Contas mais relevantes',
    'Hashtags', 'Idioma'];

  return (
    <div className='sidebar'>
      <Usuario data={userData} />
      <Sugestoes />
      <nav className='links'>
        {
          links.map((link, index) => {
            return (
              <div key={index}>
                <a href='https://www.instagram.com' className="link">{link}</a>
              </div>
            );
          })
        }
      </nav>
      <p className='copyright'>
        © 2021 INSTAGRAM DO FACEBOOK
      </p>
    </div>
  );
}