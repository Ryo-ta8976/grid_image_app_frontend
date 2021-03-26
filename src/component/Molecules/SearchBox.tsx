import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchButton from '../Atoms/SearchButton'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { searchImages } from '../../store/actions/AppActions'


interface Props {
  paper_width: string;
  place_holder: string;
  display: string;
}

export default function CustomizedInputBase(props: Props): JSX.Element {
  const [label, setLabel] = React.useState('')
  const dispatch = useDispatch()

  function handleSubmit(){
    const params = {
      label: label
    }
    axios.get('/images/search', { params })
      .then((res) => {
        dispatch(searchImages(res.data))
      })
  }

  function handleChange(e: any){
    setLabel(e.target.value)
  }

  return (
    <Paper
      component="form"
      sx={{ padding: '2px 4px', display: props.display, alignItems: 'center', width: parseInt(props.paper_width) }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.place_holder}
        inputProps={{ 'aria-label': props.place_holder }}
        onChange={handleChange}
      />
      <SearchButton padding='10px' onClick={handleSubmit} />
    </Paper>
  );
}
