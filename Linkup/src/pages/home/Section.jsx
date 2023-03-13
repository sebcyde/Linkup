import React from 'react';
import RightSide from './RightSide';
import Center from './Center';
import LeftSide from './LeftSide';

export default function Section() {
  return (
    <div className='section-wrapper'>
        <LeftSide />
        <Center />
        <RightSide />
    </div>
  )
}
