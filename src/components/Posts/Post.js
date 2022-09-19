import { useReducer } from 'react';

export default function Post({ data }) {

  const initialState = {
    likeName: 'heart-outline',
    likeClass: 'md hydrated',
    likeTotal: Number(data.caption.likes.total),
    bookmarkName: 'bookmark-outline'
  };
  const handleClick = (state, button) => {
    switch (button.type) {
      case 'likeButton':
        if (state.likeName === 'heart-outline') {
          return { ...state, likeTotal: button.payload+1, likeName: 'heart', likeClass: 'heart md hydrated' };
        } else {
          return { ...state, likeTotal: button.payload-1, likeName: 'heart-outline', likeClass: 'md hydrated' };
        };
      case 'bookmarkButton':
        if (state.bookmarkName === 'bookmark-outline') {
          return { ...state, bookmarkName: 'bookmark' };
        } else {
          return { ...state, bookmarkName: 'bookmark-outline' };
        }
      default:
        throw new Error();
      };
  }
  const [postState, dispatch] = useReducer(handleClick, initialState);
  
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
            <button onClick={() => dispatch({type: 'likeButton', payload: postState.likeTotal})} className='like-button'>
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
              e <strong>outras {postState.likeTotal.toLocaleString('pt-br')} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}