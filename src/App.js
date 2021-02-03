import React from 'react';

import Heart from 'react-feather/dist/icons/heart';
import ArrowUp from 'react-feather/dist/icons/arrow-up';
import ArrowDown from 'react-feather/dist/icons/arrow-down';
import Minus from 'react-feather/dist/icons/minus';

import {
  PP_GREEN,
  ARROW_RED,
  ARROW_GREEN,
  NEUTRAL_GRAY
} from './style/constants';

function App() {
  return (
    <div
      style={{
        background: '#E5E5E5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      Main Screen

      <Heart style={{ fill: PP_GREEN, stroke: PP_GREEN }} />
      <Heart style={{ stroke: NEUTRAL_GRAY }} />
      <ArrowUp style={{ stroke: ARROW_GREEN }} />
      <ArrowDown style={{ stroke: ARROW_RED }} />
      <Minus style={{ stroke: NEUTRAL_GRAY }} />
    </div>
  );
}

export default App;
