import {FTable, FHeader, ColorDialog, SearchBar} from '../../components'
import {Color, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {RootState, createColor, updateColor} from "../../store";

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'name', text: 'Ten'},
  {name: 'action', text: ''}
]

const defaultColor = {
  id: 0,
  name: ''
}

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curColor, setCurColor] = useState<Color>({...defaultColor})
  const {data: colors} = useSelector((state: RootState) => state.colors)
  // const [colors, setColors] = useState<Color[]>([])

  const onAdd = () => {
    setCurColor({...defaultColor})
    setIsOpenDialog(true)
  }

  const onUpdate = useCallback((id: number) => {
    // @ts-ignore
    setCurColor({...colors.find(e => e.id === id)})
    setIsOpenDialog(true)
  }, [colors])

  const onSave = async () => {
    setIsOpenDialog(false)

    // @ts-ignore
    if (curColor.id) store.dispatch(updateColor({...toBody(), id: curColor.id}))
    // @ts-ignore
    else store.dispatch(createColor(toBody()))
  }

  const toBody = () => {
    return {
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