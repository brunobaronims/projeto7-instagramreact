import { useReducer } from 'react';

export default function Post({ data }) {
  const initialState = {
    likeClicked: false,
    likeName: 'heart-outline',
    likeClass: 'md hydrated',
    bookmarkClicked: false,
    bookmarkName: 'bookmark-outline'
  };
  const [postState, dispatch] = useReducer(handleClick, initialState);

  function handleClick(state, button) {
    switch (button.type) {
      case 'likeButton':
        if (!state.likeClicked) {
          return { ...state, likeClicked: true, likeName: 'heart', likeClass: 'heart md hydrated' };
        } else {
          return { ...state, likeClicked: false, likeName: 'heart-outline', likeClass: 'md hydrated' };
        };
      case 'bookmarkButton':
        if (!state.bookmarkClicked) {
          return { ...state, bookmarkClicked: true, bookmarkName: 'bookmark' };
        } else {
          return { ...state, bookmarkClicked: false, bookmarkName: 'bookmark-outline' };
        }
      default:
        throw new Error();
    };
  }

  return (
    <li className='post'>
      <div className='post-header'>
        <div>
          <img alt='Profile' src={data.profile.image} />
          <p>{data.profile.name}</p>
        </div>
        <ion-icon name="ellipsis-horizontal" />
      </div>
      <div className='post-image'>
        <img alt='Content' src={data.image} />
      </div>
      <div className='post-caption'>
        <div className='caption-top'>
          <div>
            <button onClick={() => dispatch({type: 'likeButton'})} className='like-button'>
              <ion-icon class={postState.likeClass} name={postState.likeName} />
            </button>
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <button onClick={() => dispatch({type: 'bookmarkButton'})} className='bookmark-button'>
            <ion-icon name={postState.bookmarkName} />
          </button>
        </div>
        <div className='caption-bottom'>
          <img alt='Caption' src={data.caption.image} />
          <div>
            Curtido por <strong>{data.caption.likes.latest} </strong>
              e <strong>outras {Number(data.caption.likes.total).toLocaleString('pt-BR')} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}