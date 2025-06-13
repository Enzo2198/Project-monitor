import {FTable, FHeader, ProductDialog, SearchBar} from '../../components'
import {Header, Product} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {RootState, updateProduct, createProduct} from "../../store";

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'code', text: 'Code'},
  {name: 'name', text: 'Ten'},
  {name: 'shortName', text: 'Ten Ngan'}, // bang
  {name: 'description', text: 'Mo Ta'},
  {name: 'color', text: 'mau', displayProperty: 'name'}, // {id, name}
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

  const {data: products} = useSelector((state: RootState) => state.products)
  // const {data: colors} = useSelector(state => state.products)

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurProduct({...products.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [products])

  const onSave = async () => {
    console.log(curProduct)
    setIsOpenDialog(false)

    // @ts-ignore
    if (curProduct.id) store.dispatch(updateProduct({...toBody(), id: curProduct.id}))
    // @ts-ignore
    else store.dispatch(createProduct(toBody()))
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