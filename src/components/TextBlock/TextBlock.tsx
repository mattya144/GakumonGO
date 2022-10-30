import React from 'react';
import './TextBlock.css';

type TextBlockProps = {
  text: string;
};

const TextBlock: React.FC<TextBlockProps> = ({
  text
}) => {
  return (
    <div className='TextBlock'>
      <div className='TextBlock__text'>
        {text}
      </div>
    </div>
  )
};

export default TextBlock;
