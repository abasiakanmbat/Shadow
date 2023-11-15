import React from 'react'
import Layout from '../components/layout/layout'
import { Carousel } from 'flowbite-react'
import Slider from '../components/carousel/carousel'
import HomeBody from '../components/home/homeBody'

function Home() {
  return (
    <div>
      <Layout>
        <Slider></Slider>
        <HomeBody/>
      </Layout>
    </div>
  )
}

export default Home
