/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import BasicModal from './BasicModal'

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

export default function GridImageList(props: {images: {label: string, url: string, id: number}[]}): JSX.Element {
  const classes = useStyles()

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
