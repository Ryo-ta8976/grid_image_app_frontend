import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'

interface Props {
  button_message: string;
  title: string;
  label: string[];
  submit_button_message: string;
}
export default function BasicModal(props: Props): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
          {props.label.map((item: string) => <TextField key={item} id="outlined-basic" label={item} sx={{ display: 'block' }} fullWidth />)}
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained">{props.submit_button_message}</Button>
        </Box>
      </Modal>
    </div>
  );
}
