import React from 'react';
import './HeaderLeft.css';
import { ReactComponent as Logo } from '../../materials/Icon.svg';

const HeaderLeft: React.FC = () => {
  return (
    <div className="HeaderLeftStyle">
      <Logo />
      <div className="HeaderLeftText">すべての学モン</div>
    </div>
  );
};

export default HeaderLeft;
