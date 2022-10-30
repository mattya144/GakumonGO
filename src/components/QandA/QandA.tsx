import React from 'react';
import Input from '../Input/Input';
import QandATitle from '../QandATitle/QandATitle';
import './QandA.css';

type QandAProps = {
  gakumonId: string;
};

const QandA: React.FC<QandAProps> = ({
  gakumonId
}) => {
  // TODO: gakumonIdを使ってAPIから質問をとってくる
  const question = `ここに gakumonId:${gakumonId}を使って質問をとってくる`;

  return (
    <div className='QandA'>
      <QandATitle text='質問' />
      <div className='QandA__question'>
        {question}
      </div>
      <QandATitle text='答え' />
      <Input />
    </div>
  );
};

export default QandA;
