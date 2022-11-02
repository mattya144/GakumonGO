import React from 'react';
import Avatar from '../components/Avatar/Avatar';
import GakumonHeader from '../components/GakumonHeader/GakumonHeader';
import TextBlock from '../components/TextBlock/TextBlock';
import useSideBar from '../hooks/useSideBar/useSideBar';
import './HomePage.css';

const HomePage: React.FC = () => {
  const {
    SideBar,
    selectedGakumon,
  } = useSideBar();

  const {
    gakumonId,
    gakumonName,
    imageUrl
  } = selectedGakumon;

  // TODO: gakumonIdを使用して説明を取得する
  const gakumonDescription =
    `口から　灼熱の　炎を　吐き出すとき
尻尾の　先は
より　赤く　激しく　燃え上がる`;

  return (
    <div className='HomePage'>

      <div className='Header' />
      <div className='Main'>
        <div className='Gakumon'>
          <GakumonHeader
            gakumonId={gakumonId}
            gakumonName={gakumonName}
          />

          {/* spacer */}
          <div style={{ height: '80px' }} />

          <Avatar imageUrl={imageUrl} />
          <TextBlock text={gakumonDescription} />
        </div>
        <SideBar />
      </div>

    </div>
  );
};

export default HomePage;
