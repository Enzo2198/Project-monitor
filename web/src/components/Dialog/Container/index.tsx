import {Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box} from "@mui/material";
import Button from "@mui/material/Button";
import {useState, useEffect} from "react";
import {Product} from "../../../utils";

interface DialogContainer {
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  onSave: (data: Product) => void;
  initialData?: Product;
  products: Product[];
}

export default ({isOpen, onClose, onSave, initialData, width=500}: DialogContainer) => {
  const [formData, setFormData] = useState({name: '', type: '', original: ''})
  const [errors, setErrors] = useState<{ name: string | null, type: string | null, original: string | null }>({
    name: null,
    type: null,
    original: null,
  });

  useEffect (() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          name: initialData.name,
          type: initialData.type,
          original: initialData.original,
        })
      } else {
        setFormData({ name: '', type: '', original: ''})
      }
      setErrors({ name: null, type: null, original: null });
    }
  }, [isOpen, initialData])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? null : prevErrors[name],
    }));
  }

  const handleSave = () => {
    const {name, type, original} = formData
    const newErrors = {
      name: name ? null : 'Please enter a name',
      type: type ? null : 'Please enter a type',
      original: original ? null : 'Please enter a original',
    }
    setErrors(newErrors);

    if (newErrors.name || newErrors.type || newErrors.original) {
      return
    }

    onSave(formData);
  }

  return (
    <Dialog open={isOpen} sx={{width, margin: 'auto'}}>
      <DialogTitle>Dialog Container</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1} }}
          noValidate
          autoComplete="off"
        >
        <TextField
          fullWidth label="Name"
          variant="outlined"
          value={formData.name}
          name='name'
          onChange={onChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth label="Type"
          variant="outlined"
          value={formData.type}
          name='type'
          onChange={onChange}
          error={!!errors.type}
          helperText={errors.type}
        />
        <TextField
          fullWidth label="Original"
          variant="outlined"
          value={formData.original}
          name='original'
          onChange={onChange}
          error={!!errors.original}
          helperText={errors.original}
        />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleSave} color={'success'}>Save</Button>
        <Button variant="outlined" onClick={onClose} color={'error'}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}