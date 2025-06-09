import {TableCell} from "@mui/material";
import {useContext, useRef} from "react";
import {TableContext} from "./index.tsx";

export default function ({column, row, rowIndex, columnIndex}: any) {
  const injector: any = useContext(TableContext)
  const {cursor, setCursor, onFocus} = injector
  const cellRef: any = useRef(null)

  const onclick = () => {
    if (cellRef.current) {
      const width = cellRef.current.offsetWidth;
      const height = cellRef.current.offsetHeight;
      const left = cellRef.current.offsetLeft;
      const top = cellRef.current.offsetTop;

      setCursor({
        ...cursor,
        rowIndex,
        columnIndex,
        width,
        height,
        top,
        left
      })
    }
  }

  const cell = row[column.name] || ''

  const onDoubleClick = () => {
    setCursor({
      ...cursor, editing: true
    })

    onFocus()
  }

  return (
    <TableCell
      sx={{padding: 0}}
      ref={cellRef}
      className={`cell-${rowIndex}-${columnIndex}`}
      onClick={onclick}
      size={"small"}
      onDoubleClick={onDoubleClick}
    >
      {cell}
    </TableCell>
  )
}
