import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchButton from '../Atoms/SearchButton'

interface Props {
  paper_width: string;
  place_holder: string;
  display: string;
}

export default function CustomizedInputBase(props: Props): JSX.Element {
  return (
    <Paper
      component="form"
      sx={{ padding: '2px 4px', display: props.display, alignItems: 'center', width: parseInt(props.paper_width) }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.place_holder}
        inputProps={{ 'aria-label': props.place_holder }}
      />
      <SearchButton padding='10px' />
    </Paper>
  );
}
