import NestedLayout from '@/components/NestedLayout'
import React from 'react'
import type { NextPageWithLayout } from '../../_app'
import { GetStaticPaths, GetStaticProps } from 'next'
import { dummy } from '../../../../dummy'

interface NestedAboutProps {
  data?: {
    id: number
    text: string
  }
}

const NestedAbout: NextPageWithLayout = ({ data }: NestedAboutProps) => {
  return <div>{data?.text}</div>
}
NestedAbout.getLayout = function getLayout(page: React.ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}
export default NestedAbout

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummy.map(item => ({ params: { id: String(item.id) } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ctx => {
  const id = ctx.params?.id

  const data = dummy.find(item => item.id === Number(id))
  return {
    props: {
      data,
    },
  }
}
