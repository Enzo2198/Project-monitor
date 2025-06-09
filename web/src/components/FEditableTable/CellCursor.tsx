import {TableContext} from "./index.tsx";
import {useContext} from "react";
import './style.sass'

export default function () {

  const injector: any = useContext(TableContext)
  const {cursor} = injector

  const onKeyDown = () => {
    console.log('onKeyDown trong cell cursor')
  }

  return (
    <span
      className={'cursor'}
      style={{
        top: `${cursor.top}px`,
        left: `${cursor.left}px`,
        width: `${cursor.width}px`,
        height: `${cursor.height}px`,
      }}
      tabIndex={0}
      onKeyDown={onKeyDown}
    />
  )
}