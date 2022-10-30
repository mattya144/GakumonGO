import React from 'react';
import './SideBar.css';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import GakumonCard from '../GakumonCard/GakumonCard';
import Gakumon from '../../types/Gakumon';

const SideBar: React.FC = () => {

  // TODO: ここでAPIからgakumonId, localStorageからimageUrlとgakumonNameをとってくる
  const gakumonList: Gakumon[] = [
    {
      imageUrl: "https://pbs.twimg.com/profile_images/1486326538304102400/9hYziRCJ_400x400.jpg",
      gakumonName: "matumoto",
      gakumonId: "s1280136",
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/1486326538304102400/9hYziRCJ_400x400.jpg",
      gakumonName: "matumoto2",
      gakumonId: "s1280136_1234",
    },
  ];

  return (
    <div className='SideBar'>
      <SideBarHeader />
      <div className='SideBar__gakumonList'>
        {gakumonList.map((gakumon) =>
          <GakumonCard
            gakumonId={gakumon.gakumonId}
            gakumonName={gakumon.gakumonName || ""}
            imageUrl={gakumon.imageUrl || ""}
          />
        )}
      </div>
    </div>
  );
};

export default SideBar;
