import React from 'react';
import useDialog from '../../hooks/useDialog/useDialog';
import './GakumonCard.css';

type GakumonCardProps = {
  imageUrl: string;
  gakumonId: string;
  gakumonName: string;
};

const GakumonCard: React.FC<GakumonCardProps> = ({
  imageUrl, gakumonId, gakumonName
}) => {
  const {
    Dialog,
    openDialog,
  } = useDialog();

  return (
    <>
      <Dialog gakumonId={gakumonId} />

      <button
        className='GakumonCard'
        onClick={openDialog}
      >
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
    </>
  );
};

export default GakumonCard;
