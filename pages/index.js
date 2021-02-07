import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <div className='App container my-10 mx-auto max-w-screen-lg'>
        <Header />
        <main>
          <Hero />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
    </>
  );
}
