import React from 'react';
import './GakumonCard.css';

type GakumonCardProps = {
  imageUrl: string;
  gakumonId: string;
  gakumonName: string;
};

const GakumonCard: React.FC<GakumonCardProps> = ({
  imageUrl, gakumonId, gakumonName
}) => {
  return (
    <button className='GakumonCard'>
      <img src={imageUrl} className='GakumonCard__icon' />
      <div className='GakumonCard__text'>
        <div className='GakumonCard__gakumonId'>
          {gakumonId}
        </div>
        <div className='GakumonCard__gakumonName'>
          {gakumonName}
        </div>
      </div>
    </button>
  );
};

export default GakumonCard;
