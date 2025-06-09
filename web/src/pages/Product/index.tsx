import {FTable, FHeader, ProductDialog, SearchBar} from '../../components'
import {Header, Product} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {createProduct, deleteProduct, editProduct} from "../../store";

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'code', text: 'Code'},
  {name: 'name', text: 'Ten'},
  {name: 'shortName', text: 'Ten Ngan'},
  {name: 'description', text: 'Mo Ta'},
  {name: 'color', text: 'mau', displayProperty: 'name'},
  {name: 'action', text: ''}
]


export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curProduct, setCurProduct] = useState<Product>({
    id: 0,
    code: '',
    name: '',
    shortName: '',
    description: '',
    color: null
  })

  const {isLoading, data: products} = useSelector(state => state.products)
  // @ts-ignore
  // const [colors, setColors] = useState<Color[]>([])
  // const {isLoading, data: colors} = useSelector(state => state.customers)

  const onAdd = () => {
    setCurProduct({
      id: 0,
      code: '',
      name: '',
      shortName: '',
      description: '',
      color: null
    });
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurProduct({...products.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [products])

  const onSave = async () => {
    setIsOpenDialog(false)

    if (curProduct.id) {
      // @ts-ignore
      store.dispatch(editProduct({
        ...toBody(),
        id: curProduct.id
      }))
    }
    else {
      // @ts-ignore
      store.dispatch(createProduct(toBody()))
    }
  }

  const onDelete = (id: number) => {
    // @ts-ignore
    store.dispatch(deleteProduct(id))
  }

  const toBody = () => {
    return {
      name: curProduct.name,
      shortName: curProduct.shortName,
      code: curProduct.code,
      description: curProduct.description,
      colorId: null
    }
  }

  return (
    <>
      <FHeader title={'Products'}/>
      <Box className={'container'}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={products}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <ProductDialog
          product={curProduct}
          setProduct={setCurProduct}
          onSave={onSave}
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
        />
      </Box>
    </>
  )
}