import {TableRow} from "@mui/material";
import Cell from './Cell.tsx'

export default function ({columns, row, rowIndex}: any) {
  return (
    <TableRow key={row.id}>
      {
        columns.map((column: any, columnIndex: number) => {
          // console.log(column, row)
          return (
            <Cell
              key={`column-${columnIndex}`}
              column={column}
              row={row}
              columnIndex={columnIndex}
              rowIndex={rowIndex}
            />
          )
        })
      }
    </TableRow>
  )
}