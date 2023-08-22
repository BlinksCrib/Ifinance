import React from 'react'
import Hero from '../components/Home/Hero'
import Strategy from '../components/Home/Strategy'
import ClientSay from '../components/Home/ClientSay'
import DownloadApps from '../components/Home/DownloadApps'
import Pricing from '../components/Home/Pricing'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Strategy />
      <ClientSay />
      <DownloadApps />
      <Pricing />
    </div>
  )
}

export default HomePage
