export interface Header {
  name: string;
  text: string;
}

interface Master {
  id: number;
  name: string;
}

export interface Employee extends Master {
  age: number;
  address: string;
}

export interface Product extends Master {
  type: string;
  original: string;
}