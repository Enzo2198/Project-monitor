import {FTable, FHeader, ColorDialog, SearchBar} from '../../components'
import {Color, Header} from '../../utils'
import {Box} from "@mui/material";
import {useState, useEffect, useCallback} from "react";
import {getMethod, postMethod, putMethod} from "../../utils/api.ts";

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
  const [colors, setColors] = useState<Color[]>([])

  const onAdd = () => {
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
      const newColor: Color = await putMethod(`/colors/${curColor.id}`, toBody())
      const updateIndex = colors.findIndex(
        (e: Color) => Number(e.id) === Number(curColor.id)
      )
      colors[updateIndex] = newColor
      setColors([...colors])
    }
    else {
      const newColor: Color = await postMethod('/colors', toBody())
      setColors([...colors, newColor])
    }
  }

  const toBody = () => {
    return {
      name: curColor.name
    }
  }

  const onMounted = async () => {
    const colorsData  = await getMethod('/colors')
    setColors([...colorsData])
  }

  useEffect(() => {
    onMounted()
  }, [])

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