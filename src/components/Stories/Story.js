export default function Story({ data }) {
  return (
    <li>
      <div className='story-image'>
        <img className='story-background' alt='Background' src='./img/story-circle.svg' />
        <img alt="Story" src={data.image} />
      </div>
      <p>{data.profile}</p>
    </li>
  );
}