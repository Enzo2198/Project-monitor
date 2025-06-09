import {useContext} from "react";
import {TableContext} from "./index.tsx";

export default function () {
  const injector: any = useContext(TableContext)
  const {tableRef} = injector

  return (
    <span className={'cell-selection'}></span>
  )
}