import React from 'react'
import Herosection from "@/components/Herosection"
import FeaturedCourses from '@/components/FeaturedCourses'
import Stickyscroll from '@/components/Stickyscroll'
import MovingCards from '@/components/MovingCards'
import UpcomingWebinars from "@/components/UpcomingWebinars"
import Instructors from '@/components/Instructors'
import FooterCompo from '@/components/FooterCompo'

const page = () => {
  return (
    <>
      <Herosection/>
      <FeaturedCourses/>
      <Stickyscroll/>
      <MovingCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <FooterCompo/>
    </>
  )
}

export default page;
