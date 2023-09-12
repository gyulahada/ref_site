import React from 'react';
import Navbar from '../components/Navbar';
import HeaderText from '../components/HeaderText';
import WhoFor from '../components/WhoFor';
import Members from '../components/Members';
import CircleCounter from '../components/CircleCounter';

export default function HomePage() {


  return (
    <div>
      <Navbar />
      <HeaderText />
      <WhoFor />
      <Members />
      <CircleCounter />
    </div>
  );
}