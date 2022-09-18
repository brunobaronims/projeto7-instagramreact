export default function Post({ data, state, click}) {
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
            <button onClick={() => click({type: 'likeButton'})} className='like-button'>
              <ion-icon class={state.likeClass} name={state.likeName} />
            </button>
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <button onClick={() => click({type: 'bookmarkButton'})} className='bookmark-button'>
            <ion-icon name={state.bookmarkName} />
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