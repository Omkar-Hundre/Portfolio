import React from 'react'
import Intro from '../Components/Intro'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import { DSAStats } from '../Components/DSA'
import {AppNavbar} from '../Components/Navbar'
import Contact from '../Components/Contact'
import { Experience } from '../Components/Experience'
import { Clubs } from '../Components/Clubs'
import { Achievements } from '../Components/Achievements'
import { Creative } from '../Components/Creative'

function Home() {
  return (
    <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6'>
      <AppNavbar />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Clubs />
      <Achievements />
      <Creative />
      {/* <DSAStats /> */}
      <Contact />
    </div>
  )
}

export default Home