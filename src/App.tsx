import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './components/Avatar/Avatar';
import './components/TextBlock/TextBlock';
import Avatar from './components/Avatar/Avatar';
import TextBlock from './components/TextBlock/TextBlock';
import GakumonHeader from './components/GakumonHeader/GakumonHeader';
import GakumonCard from './components/GakumonCard/GakumonCard';
import SideBarHeader from './components/SideBarHeader/SideBarHeader';
import SideBar from './components/SideBar/SideBar';
import QandATitle from './components/QandATitle/QandATitle';
import Input from './components/Input/Input';
import QandA from './components/QandA/QandA';
import useDialog from './hooks/useDialog/useDialog';
import HomePage from './pages/HomePage';

const App = () => {

  return (
    <div className="App">
      <HomePage />
      {/* <Avatar />
      <TextBlock text='aiueo kakikueko saishisueso' />
      <GakumonHeader gakumonId='s1280136' gakumonName='hogehogehoge' />
      <GakumonCard
        imageUrl='https://pbs.twimg.com/profile_images/1486326538304102400/9hYziRCJ_400x400.jpg'
        gakumonId='s1280136'
        gakumonName='matumoto1234'
      />
      <SideBarHeader />
      <SideBar />
      <QandATitle text='aiueotext' />
      <Input />
      <QandA gakumonId='s1280136' /> */}
    </div>
  );
};

export default App;
