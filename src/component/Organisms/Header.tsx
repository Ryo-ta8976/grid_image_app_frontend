import * as React from 'react'
import Box from '@material-ui/core/Box'
import SearchBox from '../Molecules/SearchBox'
import BasicModal from './BasicModal'

export default function Header(): JSX.Element {
  return (
    <Box
      sx={{
        height: 80,
        bgcolor: 'skyblue',
      }}
    >
        <SearchBox paper_width='230' place_holder='Search by name' display='inline-block' />
        <BasicModal index={0} type='add' button_message='写真を追加' title='Add a new photo' label={['Label', 'Photo URL']} submit_button_message='Submit' />
    </Box>
  );
}
