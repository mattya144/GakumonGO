import React from 'react';
import './QandATitle.css';

type QandATitleProps = {
  text: string;
};

const QandATitle: React.FC<QandATitleProps> = ({
  text
}) => {
  return (
    <div className='QandATitle'>
      <div className='QandATitle__text'>
        {text}
      </div>
    </div>
  );
};

export default QandATitle;
