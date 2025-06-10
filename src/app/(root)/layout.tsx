import SiteLayout from '@/components/Layout/SiteLayout'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <SiteLayout>{children}</SiteLayout>
  )
}

export default layout