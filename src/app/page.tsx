"use client"

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Image from 'next/image';

const Home = () => {
    const [typingStatus, setTypingStatus] = useState('')
  return (
    <div className="home">
      <Image  src="/orbital.png" alt="home image" className="orbital" width={400} height={400} />
      <div className="left">
        <h1>Voltz AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          jfjjfifii rfro roeioeieoo oroo eoeoe oeoeo ourur ororo wsuuue rororor
          jfsiie eir wowowd ddd wwwe euue ror oeoeoe oririr.
        </h3>
        <Link href="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <Image src="/bot.png" alt="bot" className="bot image" width={200} height={200} />
          {/* animated chat */}
          <div className="chat text-white">
            <Image
              src={
                typingStatus === "human1"
                  ? `/human1.jpeg`
                  : typingStatus === `human2`
                  ? `/human2.jpeg`
                  : `/bot.png`
              }
              alt="bot image"
              width={400} height={400}
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human1: We produce food for Mice",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: We produce food for Hamsters",
                1000,
                () => {
                  setTypingStatus("human");
                },
                "Human: We produce food for Guinea Pigs",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: We produce food for Chinchillas",
                1000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <Image src="/logo.png" alt="logo" className='image' width={400} height={400} />
        <div className='links'>
          <Link href={`/`}>Terms of Service</Link>
          <span>|</span>
          <Link href={`/`}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Home