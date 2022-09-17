export default function Usuario({data}) {
  return (
    <div className='sidebar-user'>
      <img alt='User' src={data.image} />
      <div>
        <strong>
          {data.profile}
        </strong>
        <span>
          <p>
            {data.name}
          </p>
          <ion-icon name="pencil-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}