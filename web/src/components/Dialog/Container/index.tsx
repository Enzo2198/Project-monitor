import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@mui/material";
import {DialogProp} from "../../../utils";

export default ({isOpen, onClose, children, onSave}: DialogProp) => {
  return (
    <Dialog open={isOpen} sx={{margin: 'auto'}}>
      <DialogTitle>Dialog Container</DialogTitle>
      <DialogContent>
        {
          children
        }
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onSave} color={'success'}>Save</Button>
        <Button variant="outlined" onClick={onClose} color={'error'}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}