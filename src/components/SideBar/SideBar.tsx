import React from 'react';
import './SideBar.css';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import GakumonCard from '../GakumonCard/GakumonCard';
import Gakumon from '../../types/Gakumon';

export type SideBarProps = {
  gakumonList: Gakumon[]
  setSelectedGakumon: (gakumon: Gakumon) => void;
};

const SideBar: React.FC<SideBarProps> = ({
  gakumonList, setSelectedGakumon
}) => {
  return (
    <div className='SideBar'>
      <SideBarHeader />
      <div className='SideBar__gakumonList'>
        {gakumonList.map((gakumon) =>
          <GakumonCard
            key={gakumon.gakumonId}
            gakumon={gakumon}
            setSelectedGakumon={setSelectedGakumon}
          />
        )}
      </div>
    </div>
  );
};

export default SideBar;
