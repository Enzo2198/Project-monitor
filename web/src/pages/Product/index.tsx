import {FTable, FHeader, ProductDialog, SearchBar} from '../../components'
import {Color, Employee, Header, Product} from '../../utils'
import {Box, Button} from "@mui/material";
import {useState, useEffect, useCallback} from "react";
import {getMethod, postMethod, putMethod} from "../../utils/api.ts";

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

  const [products, setProducts] = useState<Product[]>([])
  const [colors, setColors] = useState<Color[]>([])

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

    if (curProduct.id) {
      const newProduct: Product = await putMethod(`/products/${curProduct.id}`, toBody())
      const updateIndex = products.findIndex(
        (e: Product) => Number(e.id) === Number(curProduct.id)
      )
      products[updateIndex] = newProduct
      setProducts([...products])
    }
    else {
      const newProduct: Product = await postMethod('/products', toBody())
      setProducts([...products, newProduct])
    }
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

  const onMounted = async () => {
    const [colorData, productsData] = await Promise.all([getMethod('/colors'), getMethod('/products')])

    setProducts([...productsData])
    setColors([...colorData])
  }

  useEffect(() => {
    onMounted()
  }, [])

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