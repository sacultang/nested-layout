import React from 'react'
import type { NextPageWithLayout } from '../_app'
import NestedLayout from '@/components/NestedLayout'

const About: NextPageWithLayout = () => {
  return <div></div>
}
About.getLayout = function getLayout(page: React.ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}
export default About
