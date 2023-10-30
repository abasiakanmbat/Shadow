import React from 'react'
import Layout from '../components/layout/layout'
import { Carousel } from 'flowbite-react'
import Slider from '../components/carousel/carousel'

function Home() {
  return (
    <div>
      <Layout>
        <Slider></Slider>
      </Layout>
    </div>
  )
}

export default Home
