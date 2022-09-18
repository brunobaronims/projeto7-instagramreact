import Post from './Post';
import { useReducer } from 'react';

export default function Posts() {
  const data = require('./PostsData.json');

  const initialState = {
    likeClicked: false,
    likeName: 'heart-outline',
    likeClass: 'md hydrated',
    bookmarkClicked: false,
    bookmarkName: 'bookmark-outline'
  };

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

  const [postState, dispatch] = useReducer(handleClick, initialState);

  return (
    <div className='posts-container'>
      <ul>
        {
          data.map((item, index) => {
            return (
              <Post key={index} data={item} state={postState} click={dispatch} />
            );
          })
        }
      </ul>
    </div>
  );
}