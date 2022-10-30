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

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Avatar />
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
      <QandA gakumonId='s1280136' />
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
