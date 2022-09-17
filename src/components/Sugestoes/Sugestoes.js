import Sugestao from './Sugestao';

export default function Sugestoes() {
  const data = require('./SugestoesData.json');

  return (
    <ul>
      <div className='suggestions-header'>
        <strong>
          Sugestões para você
        </strong>
        <strong>
          Ver tudo
        </strong>
      </div>
      {
        data.map((item, index) => {
          return (
            <Sugestao key={index} data={item} />
          );
        })
      }
    </ul>
  );
}