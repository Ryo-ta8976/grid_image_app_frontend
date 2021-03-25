import React from 'react'
import GridImageList from '../Organisms/GridImageList'
import Header from '../Organisms/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getImages } from '../../store/actions/AppActions'
import { useDispatch, useSelector } from 'react-redux'

type RooteState = {
  imagesList: {
    images: [],
    isFetching: boolean
  }
}

export default function Contents(): JSX.Element {
  const dispatch = useDispatch()
  const imagesList = useSelector((state: RooteState) => state.imagesList)
  // const {loading, error, users} = images
  useEffect(() => {
    dispatch(getImages())
  }, [])

  return (
    <div>
      <Header />
      <div>
        <GridImageList images={imagesList.images} />
      </div>
    </div>
  )
}

