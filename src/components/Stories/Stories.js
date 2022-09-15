import Story from "./Story";

export default function Stories () {
  const data = require('./Stories.json');
  console.log(data);

  return (
    <div className='stories-container'>
      <ul>
        {
          data.map((s, index) => {
            return (
              <Story key={index} data={s}></Story>
            );
          })
        }
      </ul>
    </div>
  );
}