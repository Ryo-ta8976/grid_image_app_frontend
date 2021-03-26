import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

interface Props {
  padding: string;
  onClick: any;
}

export default function SearchButton(props: Props): JSX.Element {
  return (
    <IconButton type="button" sx={{ p: props.padding }} aria-label="search" onClick={props.onClick}>
        <SearchIcon />
    </IconButton>
  );
}
