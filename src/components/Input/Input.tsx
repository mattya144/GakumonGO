import React from 'react';
import useInput from '../../hooks/useInput';
import './Input.css';

const Input: React.FC = () => {
  const {inputRef, Input} = useInput('Input__text', '');
  return (
    <div className='Input'>
      <Input />
    </div>
  );
};

export default Input;
