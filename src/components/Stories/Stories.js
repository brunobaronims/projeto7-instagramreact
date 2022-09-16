import Story from "./Story";

export default function Stories () {
  const data = require('./StoriesData.json');

  return (
    <div className='stories-container'>
      <ul>
        {
          data.map((item, index) => {
            return (
              <Story key={index} data={item}></Story>
            );
          })
        }
        <ion-icon name="chevron-forward-circle" />
      </ul>
    </div>
  );
}