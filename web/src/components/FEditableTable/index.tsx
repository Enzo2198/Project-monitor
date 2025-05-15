import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Row from "./Row.tsx";
import './style.sass'
import CellCursor from "./CellCursor.tsx";
import {createContext, useEffect, useState} from "react";
import CellInput from "./CellInput.tsx";

const defaultCursor = {
  rowIndex: 0,
  columnIndex: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  editing: false
}

export const TableContext = createContext(null)

const onFocus = () => {
  const input = document.querySelector('.cell-input input')
  // @ts-ignore
  input.focus()
}

function FTableComponent({columns, rows, onInput}: any) {
  const [cursor, setCursor] = useState({...defaultCursor})

  const provider = {
    cursor, setCursor, rows, columns, onFocus, onInput
  }

  const onKeyDown = () => {
    setCursor({
      ...cursor,
      editing: true,
    })

    onFocus()
  }

  useEffect(() => {
    console.log('cursor', cursor)
  }, [cursor])

  return (
    // @ts-ignore
    <TableContext.Provider value={provider}>
      <Table className={'f-editable-table'} tabIndex={0} onKeyDown={onKeyDown}>
        <TableHead>
          <TableRow>
            {
              columns.map((column: any) => {
                return <TableCell size={"small"} key={column.name}>{column.name}</TableCell>
              })
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            rows?.map((row: any, rowIndex: number) => {
              // @ts-ignore
              return (
                <Row
                  key={`row-${rowIndex}`}
                  columns={columns}
                  row={row}
                  rowIndex={rowIndex}
                />
              )
            })
          }

        </TableBody>
      </Table>

      <CellCursor/>
      <CellInput/>
    </TableContext.Provider>
  )
}

export default FTableComponent