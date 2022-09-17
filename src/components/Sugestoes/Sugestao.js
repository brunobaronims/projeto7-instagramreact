export default function Sugestao({data}) {
  return (
    <li className="suggestion">
      <div className='suggestion-content'>
        <img alt="Profile" src={data.image} />
        <div>
          <strong>
            {data.name}
          </strong>
          <p>
            {data.subtitle}
          </p>
        </div>
      </div>
      <span className="follow-button">
        Seguir
      </span> 
    </li>
  );
}