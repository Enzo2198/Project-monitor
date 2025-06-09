import {FTable, FHeader, ColorDialog, SearchBar} from '../../components'
import {Color, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useEffect, useCallback} from "react";
import {getMethod, postMethod, putMethod} from "../../utils/api.ts";
import {useSelector} from "react-redux";
import store, {createColor, createCustomer, deleteColor, deleteCustomer, editColor} from "../../store";

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'name', text: 'Ten'},
  {name: 'action', text: ''}
]


export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curColor, setCurColor] = useState<Color>({
    id: 0,
    name: ''
  })

  const {isLoading, data: colors} = useSelector(state => state.colors)

  const onAdd = () => {
    setCurColor({
      id: 0,
      name: ''
    })
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurColor({...colors.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [colors])

  const onSave = async () => {
    setIsOpenDialog(false)

    if (curColor.id) {
      // @ts-ignore
      store.dispatch(editColor(toBody()))
    }
    else {
      // @ts-ignore
      store.dispatch(createColor(toBody()))
    }
  }

  const onDelete = (id: number) => {
    // @ts-ignore
    store.dispatch(deleteColor(id))
  }

  const toBody = () => {
    return {
      id: curColor.id,
      name: curColor.name
    }
  }

  return (
    <>
      <FHeader title={'Colors'}/>
      <Box sx={{maxWidth: 500, margin: 'auto'}}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={colors}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <ColorDialog
          color={curColor}
          setColor={setCurColor}
          onSave={onSave}
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
        />
      </Box>
    </>
  )
}