export default function Usuario({ changeImage, changeName, data }) {
  Object.entries(data).forEach(item => {
    if (!localStorage.getItem(item[0])) {
      localStorage.setItem(item[0], item[1]);
    }
  });

  return (
    <div className='sidebar-user'>
      <img onClick={changeImage} alt='User' src={localStorage.getItem('image')} />
      <div>
        <strong>
          {localStorage.getItem('profile')}
        </strong>
        <span>
          <p>
            {localStorage.getItem('name')}
          </p>
          <ion-icon onClick={changeName} name="pencil-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}