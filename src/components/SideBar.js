import Usuario from "./Usuario/Usuario";
import Sugestoes from "./Sugestoes/Sugestoes";
import { useState } from "react";

export default function SideBar() {
  const data = require('./Usuario/UsuarioData.json');
  const links = ['Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras',
    'Privacidade', 'Termos', 'Localizações', 'Contas mais relevantes',
    'Hashtags', 'Idioma'];
  const [name, setName] = useState(data.name);
  const [image, setImage] = useState(data.image);
  data.name = name;
  data.image = image;

  function userImageClick() {
    const newImage = prompt('URL da nova imagem:');
    try {
      const url = new URL(newImage);
      localStorage.setItem('image', url);
      setImage(localStorage.getItem('image'));
    } catch {
      alert('Por favor, insira um URL válido.')
    }
  }

  function userNameClick() {
    const newName = prompt('Novo nome:');
    if (newName) {
      localStorage.setItem('name', newName);
      setName(localStorage.getItem('name'));
    }
  }

  return (
    <div className='sidebar'>
      <Usuario changeImage={() => userImageClick()} changeName={() => userNameClick()} data={data} />
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