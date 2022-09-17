import Usuario from "./Usuario/Usuario";
import Sugestoes from "./Sugestoes/Sugestoes";

export default function SideBar() {
  const userData = require('./Usuario/UsuarioData.json');

  return (
    <div className='sidebar'>
      <Usuario data={userData} />
      <Sugestoes />
      <div className='links'>

      </div>
      <div className='copyright'>

      </div>
    </div>
  );
}