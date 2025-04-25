import {FTable, DialogContainer} from "../../components";
import {Header, Product} from "../../utils";
import Button from '@mui/material/Button';
import {useState} from "react";


export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [selectProduct, setSelectProduct] = useState<Product | undefined>();

  const headers: Header[] = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'type', text: 'Kieu'},
    {name: 'original', text: 'Xuat xu'},
    {name: 'action', text: ''},
  ]

  const [products, setProducts]  = useState<Product[]> ([
    {id: 1, name: 'Hang 1', type: '1', original: 'Trung Quoc'}
  ])
  const onAdd = () => {
    setIsOpenDialog(true);
    setSelectProduct(undefined);
  }

  const onSave = (data: Product) => {
    if (selectProduct) {
      setProducts(products.map(prod => prod.id === selectProduct.id? {
        ...selectProduct, ...data} : prod
      ));
    } else {
      const newProduct = {
        id: products.length + 1,
        name: data.name,
        type: data.type,
        original: data.original,
      }
      setProducts([...products, newProduct]);
    }
    setIsOpenDialog(false);
    setSelectProduct(undefined);
  }

  const onEdit =(product: Product) => {
    setSelectProduct(product);
    setIsOpenDialog(true);
  }

    return (
        <>
          <Button variant="outlined" onClick={onAdd}>Add</Button>
          <FTable
            tableName={'Product'}
            headers={headers}
            rows={products}
            onEdit={onEdit}
          />
          <DialogContainer
            isOpen={isOpenDialog}
            onClose={() => {
              setIsOpenDialog(false)
              setSelectProduct(undefined);
            }}
            onSave={onSave}
            initialData={selectProduct}
            products={products}
          />
        </>
    )
}