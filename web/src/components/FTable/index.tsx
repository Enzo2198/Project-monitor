import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Header} from "../../utils";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


interface FTable {
  tableName: string;
  headers: Header[];
  rows: any[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const RenderActionBtn = (
  headers: Header[],
  onEdit?: () => void
) => {
  const keys = headers.map(header => header.name)
  if (!keys.includes('action')) return null

  return (
    <TableCell>
      <EditIcon color={'success'} onClick={onUpdate} style={{ cursor: 'pointer' }} />
      <DeleteOutlineIcon color={'error'} onClick={onDelete} style={{ cursor: 'pointer' }} />
    </TableCell>

  )
}

export default ({tableName, headers, rows, onUpdate, onDelete}: FTable) => {
  return (
    <>
      <h2>{tableName}</h2>
      <TableContainer sx={{width: '90%', margin: 'auto'}} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {
                headers.map((header: Header) => {
                  return <TableCell key={header.name}>{header.text}</TableCell>
                })
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {
              rows.map((row: any) => {
                return (
                  <TableRow key={row.id}>
                    {
                      Object.keys(row).map((rowKey: string) => {
                        //@ts-ignore
                        return (
                          <TableCell key={`${rowKey}-${row.id}`}>{row[rowKey]}</TableCell>
                        )
                      })
                    }
                    {
                      RenderActionBtn(headers, () => onEdit(), onDelete)
                    }
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}