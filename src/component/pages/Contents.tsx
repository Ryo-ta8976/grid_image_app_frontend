import React from 'react'
import GridImageList from '../Organisms/GridImageList'
import Header from '../Organisms/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Contents(): JSX.Element {
  const [images, setImages] = useState([{'label': '', 'url': '', 'id': 0}])
  useEffect(() => {
    axios.get('/images')
      .then((response) => {
        console.log(response.data)
        setImages(response.data)
      }).catch(error => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <div>
        <GridImageList images={images} />
      </div>
    </div>
  )
}

