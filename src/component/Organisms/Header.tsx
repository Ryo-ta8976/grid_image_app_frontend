import * as React from 'react'
import Box from '@material-ui/core/Box'
import SearchBox from '../Molecules/SearchBox'
import BasicModal from './BasicModal'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"skyblue"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'inline-block', width: '50px' }}>
            My Unspush
          </Typography>
          <SearchBox marginRight="10px" paper_width='auto' display="inline-block" place_holder="search label" />
          <BasicModal color='primary' index={0} type='add' button_message='Add a phote' title='Add a new photo' label={['Label', 'Photo URL']} submit_button_message='Submit' />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
