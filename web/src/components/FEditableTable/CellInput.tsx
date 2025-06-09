import {Autocomplete, TextField} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {TableContext} from "./index.tsx";
import './style.sass'


const onBlur = () => {
  const input = document.querySelector('.cell-input input')
  // @ts-ignore
  input.blur()
}

export default function () {

  const injector: any = useContext(TableContext)
  const {cursor, rows, columns, setCursor, onInput, tableRef} = injector

  const defaultCell = rows[cursor.rowIndex][columns[cursor.columnIndex].name]

  const [cell, setCell] = useState(defaultCell)

  useEffect(() => {
    setCell(defaultCell || '')
  }, [defaultCell])

  const cursorBorderWidth = 2
  const style = {
    top: `${cursor?.top + cursorBorderWidth}px`,
    left: `${cursor?.left + cursorBorderWidth}px`,
    width: `${cursor?.width - cursorBorderWidth * 2}px`,
  }

  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      let columnIndex = cursor.columnIndex
      let rowIndex = cursor.rowIndex

      if (cursor.columnIndex === columns.length - 1) {
        columnIndex = 0
        rowIndex += 1
      } else {
        columnIndex += 1
      }

      const nextCell: any = document.querySelector(`.cell-${rowIndex}-${columnIndex}`)

      onBlur()

      setCursor({
        ...cursor,
        columnIndex,
        rowIndex,
        top: nextCell.offsetTop,
        left: nextCell.offsetLeft,
        width: nextCell.offsetWidth,
        editing: false
      })

      tableRef?.current?.focus()
    }
  }

  const onChange = (value: string) => {
    setCell(value)

    rows[cursor.rowIndex][columns[cursor.columnIndex].name] = value
    onInput(value, cursor.rowIndex, cursor.columnIndex)
  }

  return (
    <span style={style} className={`cell-input ${cursor.editing ? 'editing' : ''}`}>
       {
         columns[cursor.columnIndex].dropdown
           ? <Autocomplete
             fullWidth
             options={columns[cursor.columnIndex].items}
             getOptionLabel={(option: any) => option.name}
             getOptionKey={(option) => option.id}
             openOnFocus={true}
             renderInput={(params) =>
               <TextField
                 {...params}
                 variant={"standard"}
                 sx={{
                   padding: 0,
                   '& .MuiOutlinedInput-root': {
                     '& fieldset': {
                       border: 'none', // remove default border
                     },
                     '&:hover fieldset': {
                       border: 'none', // remove on hover
                     },
                     '&.Mui-focused fieldset': {
                       border: 'none', // remove on focus
                     },
                   },
                   '& .MuiOutlinedInput-input': {
                     padding: '4px', // your custom padding
                   },
                 }}
               />}
             value={columns[cursor.columnIndex].items?.find(item => item.name === cell) || null}
             onChange={(_, newValue) => {
               onChange(newValue.name)
             }}
             onKeyDown={onKeyDown}
           />
           : <TextField
             autoComplete={'off'}
             sx={{
               padding: 0,
               '& .MuiOutlinedInput-root': {
                 '& fieldset': {
                   border: 'none', // remove default border
                 },
                 '&:hover fieldset': {
                   border: 'none', // remove on hover
                 },
                 '&.Mui-focused fieldset': {
                   border: 'none', // remove on focus
                 },
               },
               '& .MuiOutlinedInput-input': {
                 padding: '4px', // your custom padding
               },
             }}
             value={cell}
             onChange={(e) => onChange(e.target.value)}
             onKeyDown={onKeyDown}
           />
       }
      

      </span>
  )
}


