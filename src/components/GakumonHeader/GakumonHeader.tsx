import React from 'react';
import './GakumonHeader.css';

type GakumonHeaderProps = {
  gakumonId: string;
  gakumonName: string;
};

const GakumonHeader: React.FC<GakumonHeaderProps> = ({
  gakumonId, gakumonName
}) => {
  return (
    <div className='GakumonHeader'>
      <div className='GakumonHeader__gakumonId'>
        {gakumonId}
      </div>
      <div className='GakumonHeader__gakumonName'>
        {gakumonName}
      </div>
    </div>
  )
};

export default GakumonHeader;
