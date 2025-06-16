
export interface Header {
  name: string
  text: string
  displayProperty?: string
}

interface Master {
  id?: number
  name: string
}

export interface Color extends Master {}

export interface Employee extends Master{
  age: number | null | string
  address: string | null
  salary: number | null | string
  position: string | null
  status: string | null
}

export interface Product extends Master {
  shortName: string
  code: string
  description: string | null
  color: Color | null
}

export interface Customer extends Master {
  companyName: string | null
  address: string | null
  description: string | null
}

export interface OrderDetail {
  id: number
  productId: number,
  price: number,
  quantity: number
  amount: number,
  isValid: boolean
}

export interface Order{
  id: number
  saleDate: string | null
  customer: Master
  employee: Master
  deliveryAddress: string | null
  comment: string | null
  details: OrderDetail[]
}
