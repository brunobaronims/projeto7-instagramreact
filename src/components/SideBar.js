import Usuario from "./Usuario/Usuario";
import Sugestoes from "./Sugestoes/Sugestoes";

export default function SideBar() {
  const links = ['Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras',
    'Privacidade', 'Termos', 'Localizações', 'Contas mais relevantes',
    'Hashtags', 'Idioma'];
  const initialState = {
    image: "./img/catanacomics.svg",
    profile: "catanacomics",
    name: "Catana"
  };

  return (
    <div className='sidebar'>
      <Usuario data={initialState} />
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