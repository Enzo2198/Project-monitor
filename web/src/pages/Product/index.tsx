import {FTable, ProductDialog} from '../../components'
import {Header, Product} from '../../utils'
import {Button} from "@mui/material";
import {useState} from "react";

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)

  const headers: Header[] = [
    { name: 'id', text: 'ID' },
    { name: 'name', text: 'Ten' },
    { name: 'type', text: 'Kieu' },
    { name: 'original', text: 'Xuat xu' },
    { name: 'action', text: '' }
  ]

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Hang 1', type: '1',  original:'Trung quoc' },
  ])

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  return (
    <>
      <h1>Product</h1>
      <Button variant="outlined" onClick={onAdd}>Add</Button>
      <FTable
        tableName={'product'}
        headers={headers}
        rows={products}
      />
      <ProductDialog
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  )
}