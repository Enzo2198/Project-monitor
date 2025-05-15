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
  const {cursor, rows, columns, setCursor, onInput} = injector

  const defaultCell = rows[cursor.rowIndex][columns[cursor.columnIndex].name]

  const [cell, setCell] = useState(defaultCell)

  useEffect(() => {
    setCell(defaultCell || '')
  }, [cursor]);

  const cursorBorderWidth = 2
  const style = {
    top: `${cursor?.top + cursorBorderWidth}px`,
    left: `${cursor?.left + cursorBorderWidth}px`,
    width: `${cursor?.width - cursorBorderWidth * 2}px`,
  }

  const onkeydown = (event: any) => {
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
        left: nextCell.offsetLeft,
        width: nextCell.offsetWidth,
        top: nextCell.offsetTop,
        // editing: false,
      })
    }
  }

  const onChange = (value: string) => {
    setCell(value)

    rows[cursor.rowIndex][columns[cursor.columnIndex].name] = value
    onInput(value)
  }

  return (
    <span style={style} className={`cell-input ${cursor.editing ? 'editing' : ''}`}>
     <TextField
       autoComplete={'off'}
       sx={{
         padding: 0,
         '& .MuiOutlinedInput-root': {
           '& fieldset': {
             border: 'none',
           },
           '&:hover fieldset': {
             border: 'none',
           },
           '&.Mui-focused fieldset': {
             border: 'none',
           },
           '& .MuiOutlinedInput-input': {
             padding: '4px',
           }
         }
       }}
       value={cell}
       onChange={(e) => onChange(e.target.value)}
       onKeyDown={onkeydown}
     />

    </span>
  )
}

// {
//   columns[cursor.columnIndex].dropdown
//     ? <Autocomplete
//       fullWidth
//       options={columns[cursor.columnIndex].items}
//       getOptionLabel={(option) => option.name}
//       renderInput={(params) =>
//         <TextField
//           {...params}
//           variant={"standard"}
//           sx={{
//             padding: 0,
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 border: 'none',
//               },
//               '&:hover fieldset': {
//                 border: 'none',
//               },
//               '&.Mui-focused fieldset': {
//                 border: 'none',
//               },
//               '& .MuiOutlinedInput-input': {
//                 padding: '4px',
//               }
//             }
//           }}
//         />}
//       onChange={(_, newValue) => {
//         onChange(newValue.name)
//       }}
//       onKeyDown={onkeydown}
//     />
//     : <TextField
//       autoComplete={'off'}
//       sx={{
//         padding: 0,
//         '& .MuiOutlinedInput-root': {
//           '& fieldset': {
//             border: 'none',
//           },
//           '&:hover fieldset': {
//             border: 'none',
//           },
//           '&.Mui-focused fieldset': {
//             border: 'none',
//           },
//           '& .MuiOutlinedInput-input': {
//             padding: '4px',
//           }
//         }
//       }}
//       value={cell}
//       onChange={(e) => onChange(e.target.value)}
//       onKeyDown={onkeydown}
//     />
// }