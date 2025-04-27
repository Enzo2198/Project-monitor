import {Employee, Product} from "./common.ts";

export interface DialogProp {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  width?: number;
  children?: any
}

export interface EmployeeDialogProp extends DialogProp {
  employee: Employee,
  setEmployee: (employee: Employee) => void
}

export interface ProductDialogProp extends DialogProp {
  product: Product
}