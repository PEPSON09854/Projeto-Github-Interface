import React from 'react'
import Header from '../header/Header'
import * as S from './StyledLayout'

const Layout = ({children})=>{

  

  return (
    <S.WarapperLayout>
      <Header />
       {children} 
    </S.WarapperLayout>
  )
}

export default Layout
