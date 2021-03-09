import React from 'react'
import GridImageList from '../Organisms/GridImageList'
import Header from '../Organisms/Header'

export default function Contents(): JSX.Element {
  return (
    <div>
      <Header />
      <div>
        <GridImageList />
      </div>
    </div>
  )
}

