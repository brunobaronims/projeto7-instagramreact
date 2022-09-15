export default function Story({ data }) {
  return (
    <li>
      <img alt="Story" src={data.image} />
      <p>{data.name}</p>
    </li>
  );
}