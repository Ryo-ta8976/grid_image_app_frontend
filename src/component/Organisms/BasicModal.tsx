import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

interface Props {
  index: number;
  type: string;
  button_message: string;
  title: string;
  label: string[];
  submit_button_message: string;
}
export default function BasicModal(props: Props): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [label, setLabel] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSubmit(type: string, index: number){
    if(type === 'add'){
      const params = {
        label: label,
        url: url
      }
      axios.post('/images', { params })
      .then((res)=>{
        console.log(res.data)
        //notification
        //外部のget関数をよぶ
        //getのレスをstateのimagesに入れる
      })
    }else{
      console.log(index)
      axios.delete(`/images/${index}`)
      .then((res)=>{
        console.log(res.data)
      })
    }
    setOpen(false)
  }

  function handleChange(e: any, key: string){
    if(key == 'Label'){
      setLabel(e.target.value)
    }else if(key == 'Photo URL'){
      setUrl(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{ display: 'inline-block' }}>{props.button_message}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          {props.label.map((item: string) =>
            <TextField
              key={item}
              id="outlined-basic"
              label={item}
              sx={{ display: 'block' }}
              fullWidth
              onChange={(e) => handleChange(e, item)}
            />
          )}
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={() => handleSubmit(props.type, props.index)}>{props.submit_button_message}</Button>
        </Box>
      </Modal>
    </div>
  );
}
