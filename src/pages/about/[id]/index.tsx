import NestedLayout from '@/components/NestedLayout'
import React from 'react'
import type { NextPageWithLayout } from '../../_app'
const NestedAbout: NextPageWithLayout = () => {
  return <div>NestedAbout</div>
}
NestedAbout.getLayout = function getLayout(page: React.ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}
export default NestedAbout
