/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import axios from 'axios'
import BasicModal from './BasicModal'
import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
    overflowY: 'scroll',
    margin: '0, auto'
  },
  img: {
    borderRadius: 10,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image_item_bar: {
    opacity: 0,
  },
  image_item: {
    '&:hover': {
      cursor: 'pointer',
      "& $image_item_bar": {
        opacity: 1.0,
      }
    }
  },
})

type Props = {
  images: {label: string, url: string}[]
}

export default function GridImageList(props: {images: {label: string, url: string, id: number}[]}): JSX.Element {
  const classes = useStyles()
  // const images = useSelector(state => state.images)

  // useEffect(() => {
  //   axios.get('https://google.com/v1/images/1')
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className={classes.root}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.images.map((item) => (
          <ImageListItem key={item.id} className={classes.image_item} >
            <img
              srcSet={`${item.url}?w=161&fit=crop&auto=format 1x,
                ${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.label}
              className={classes.img}
            />
            <ImageListItemBar
              title={item.label}
              actionIcon={
                <BasicModal index={item.id} type='delete' button_message='delete' title='写真を消しますか？' label={['password']} submit_button_message='Delete' />
              }
              className={classes.image_item_bar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
