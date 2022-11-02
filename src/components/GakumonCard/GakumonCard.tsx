import React from 'react';
import useDialog from '../../hooks/useDialog/useDialog';
import './GakumonCard.css';
import Gakumon from '../../types/Gakumon';

type GakumonCardProps = {
  gakumon: Gakumon;
  setSelectedGakumon: (gakumon: Gakumon) => void;
};

const GakumonCard: React.FC<GakumonCardProps> = ({
  gakumon, setSelectedGakumon
}) => {
  const {
    Dialog,
    openDialog,
  } = useDialog();

  const {
    gakumonId,
    gakumonName,
    imageUrl,
  } = gakumon;

  return (
    <>
      <Dialog gakumonId={gakumonId} />

      <button
        className='GakumonCard'
        onClick={() => {openDialog(); setSelectedGakumon(gakumon);}}
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
