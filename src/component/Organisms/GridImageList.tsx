/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import BasicModal from './BasicModal'

const useStyles = makeStyles({
  img: {
    borderRadius: 10
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

export default function GridImageList(props: {images: {label: string, url: string, id: number}[]}): JSX.Element {
  const classes = useStyles()

  return (
      <ImageList sx={{ 'width': '100%', 'height': '60%', 'overflow': 'scroll' }} variant="masonry" cols={3} gap={8}>
        {props.images.map((item) => (
          <ImageListItem key={item.id} className={classes.image_item} sx={{ width: '100%', height: 'auto' }} >
            <img
              srcSet={`${item.url}?w=161&fit=crop&auto=format 1x,
                ${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.label}
              className={classes.img}
            />
            <ImageListItemBar
              title={item.label}
              actionIcon={
                <BasicModal color='secondary' index={item.id} type='delete' button_message='delete' title='写真を消しますか？' label={['password']} submit_button_message='Delete' />
              }
              className={classes.image_item_bar}
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}
