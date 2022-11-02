import React from 'react';
import './Avatar.css';

type AvatarProps = {
  imageUrl: string;
};

const Avatar: React.FC<AvatarProps> = ({
  imageUrl
})  => {
  return (
    <img src={imageUrl} className='Avatar' />
  )
};

export default Avatar;
