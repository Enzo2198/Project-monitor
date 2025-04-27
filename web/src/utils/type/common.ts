export interface Header {
  name: string;
  text: string;
}

interface Master {
  id: number | null;
  name: string | null;
}

export interface Employee extends Master {
  age: number | null;
  address: string | null;
}

export interface Product extends Master {
  type: string | null;
  original: string | null;
}