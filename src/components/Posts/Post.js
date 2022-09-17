export default function Post({ data }) {
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
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline" />
        </div>
        <div className='caption-bottom'>
          <img alt='Caption' src={data.caption.image} />
          <div>
            Curtido por <strong>{data.caption.likes.latest} </strong>
              e <strong>outras {data.caption.likes.total} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}