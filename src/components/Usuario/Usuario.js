import { useReducer } from "react";

export default function Usuario({ data }) {
  const initialState = data;

  const checkURL = () => {
    try {
      const url = new URL(prompt('URL da nova imagem:'));
      return url;
    } catch(error) {
      alert('Insira um URL válido.')
      return false;
    }
  }
  
  const handleClick = (state, button) => {
    switch (button.type) {
      case 'image':
        if (button.payload) {
          return { ...state, image: button.payload };
        } return {...state};
      case 'userName':
        if (button.payload) {
          return { ...state, name: button.payload };
        } return {...state};
    };
  }

  const [state, dispatch] = useReducer(handleClick, initialState);

  return (
    <div className='sidebar-user'>
      <img onClick={() => dispatch({type: 'image', payload: checkURL()})} alt='User' src={state.image} />
      <div>
        <strong>
          {state.profile}
        </strong>
        <span>
          <p>
            {state.name}
          </p>
          <ion-icon onClick={() => dispatch({type: 'userName', payload: prompt('Novo nome:')})} name="pencil-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}