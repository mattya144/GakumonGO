import React, { useState } from 'react';
import Gakumon from '../../types/Gakumon';
import EmptySideBar from '../../components/SideBar/SideBar';

type UseSideBar = () => {
  SideBar: React.FC;
  selectedGakumon: Gakumon;
  setSelectedGakumon: (gakumon: Gakumon) => void;
};

const useSideBar: UseSideBar = () => {
  const [selectedGakumon, setGakumon] = useState<Gakumon>({
    gakumonId: '',
    gakumonName: '',
    imageUrl: '',
  });

  const setSelectedGakumon = (gakumon: Gakumon): void => {
    setGakumon(gakumon);
  };

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

  const SideBar: React.FC = () => (
    <EmptySideBar
      gakumonList={gakumonList}
      setSelectedGakumon={setSelectedGakumon}
    />
  );

  return {
    SideBar: SideBar,
    selectedGakumon,
    setSelectedGakumon,
  };
};

export default useSideBar;
